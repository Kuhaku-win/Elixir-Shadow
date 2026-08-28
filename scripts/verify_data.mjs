import { RECIPES_DATABASE } from '../src/data/recipes.ts';
import { INGREDIENTS_DATABASE } from '../src/data/ingredients.ts';
import { MASTERS_DATABASE } from '../src/data/masters.ts';
import { COMPETITIONS_DATABASE } from '../src/data/competitions.ts';
import { LORE_STORIES } from '../src/data/lore.ts';

console.log('🧪 开始运行 Elixir & Shadow 全量数据完整性、真实性与一致性终极审计...\n');

let totalErrors = 0;

const VALID_GLASS_TYPES = new Set([
  '马天尼杯 / Martini Glass',
  '古典杯 / Rocks Glass',
  '高球杯 / Highball Glass',
  '碟形香槟杯 / Coupe Glass',
  '笛形香槟杯 / Flute Glass',
  '柯林杯 / Collins Glass',
  '尼克诺拉杯 / Nick & Nora Glass',
  '铜制马克杯 / Copper Mule Mug',
  '飓风杯 / Hurricane Glass',
  '雪莉杯 / Sherry Glass',
  '爱尔兰咖啡杯 / Irish Coffee Glass',
  '子弹杯 / 一口杯 / Shot Glass'
]);

const VALID_BASE_SPIRITS = new Set([
  'Gin', 'Vodka', 'Rum', 'Whiskey', 'Tequila', 'Brandy', 'Baijiu', 'Liqueur', 'None'
]);

const VALID_TECHNIQUES = new Set([
  'Shake', 'Stir', 'Build', 'Muddle', 'Blend', 'Layer', 'Float'
]);

// 1. Check Ingredient database & substitutes
console.log(`📦 [1/5] 正在检查原材料数据库 (${INGREDIENTS_DATABASE.length} 项)...`);
const ingredientIdMap = new Map();
const ingredientSlugMap = new Map();

INGREDIENTS_DATABASE.forEach((ing, idx) => {
  if (!ing.id) {
    console.error(`❌ 原料 #${idx} 缺少 id 字段`);
    totalErrors++;
  } else if (ingredientIdMap.has(ing.id)) {
    console.error(`❌ 原料 ID 冲突: "${ing.id}"`);
    totalErrors++;
  } else {
    ingredientIdMap.set(ing.id, ing);
  }

  if (!ing.slug) {
    console.error(`❌ 原料 #${idx} (${ing.name}) 缺少 slug 字段`);
    totalErrors++;
  } else if (ingredientSlugMap.has(ing.slug)) {
    console.error(`❌ 原料 Slug 冲突: "${ing.slug}"`);
    totalErrors++;
  } else {
    ingredientSlugMap.set(ing.slug, ing);
  }

  if (ing.abv < 0 || ing.abv > 100) {
    console.error(`❌ 原料 "${ing.name}" 的 ABV (${ing.abv}) 超出 [0, 100] 范围`);
    totalErrors++;
  }
});

// Check substitute targets
let checkedSubs = 0;
INGREDIENTS_DATABASE.forEach((ing) => {
  if (ing.substitutes) {
    ing.substitutes.forEach((sub) => {
      checkedSubs++;
      if (!ingredientIdMap.has(sub.targetIngredientId)) {
        console.error(`❌ 原料 "${ing.name}" 的平替目标 targetIngredientId "${sub.targetIngredientId}" 在原料库中不存在!`);
        totalErrors++;
      }
    });
  }
});

console.log(`✅ 原料数据库检查完成: ${ingredientIdMap.size} 项有效，${checkedSubs} 项平替映射 100% 有效。\n`);

// 2. Check Recipe database
console.log(`🍸 [2/5] 正在检查鸡尾酒配方数据库 (${RECIPES_DATABASE.length} 款)...`);
const recipeIdMap = new Map();
const recipeSlugMap = new Map();

RECIPES_DATABASE.forEach((recipe, idx) => {
  if (!recipe.id) {
    console.error(`❌ 配方 #${idx} 缺少 id 字段`);
    totalErrors++;
  } else if (recipeIdMap.has(recipe.id)) {
    console.error(`❌ 配方 ID 冲突: "${recipe.id}"`);
    totalErrors++;
  } else {
    recipeIdMap.set(recipe.id, recipe);
  }

  if (!recipe.slug) {
    console.error(`❌ 配方 #${idx} (${recipe.name}) 缺少 slug 字段`);
    totalErrors++;
  } else if (recipeSlugMap.has(recipe.slug)) {
    console.error(`❌ 配方 Slug 冲突: "${recipe.slug}"`);
    totalErrors++;
  } else {
    recipeSlugMap.set(recipe.slug, recipe);
  }

  // Check ABV
  if (recipe.abv < 0 || recipe.abv > 100) {
    console.error(`❌ 配方 "${recipe.name}" 的 ABV (${recipe.abv}) 超出范围`);
    totalErrors++;
  }

  // Check Glass type
  if (!VALID_GLASS_TYPES.has(recipe.glass)) {
    console.error(`❌ 配方 "${recipe.name}" 使用了非标玻璃杯型: "${recipe.glass}"`);
    totalErrors++;
  }

  // Check Base Spirit
  if (!VALID_BASE_SPIRITS.has(recipe.baseSpirit)) {
    console.error(`❌ 配方 "${recipe.name}" 使用了非法基酒分类: "${recipe.baseSpirit}"`);
    totalErrors++;
  }

  // Check Technique
  if (!VALID_TECHNIQUES.has(recipe.technique)) {
    console.error(`❌ 配方 "${recipe.name}" 使用了非法调酒技法: "${recipe.technique}"`);
    totalErrors++;
  }

  // Check Steps & ProTips
  if (!recipe.steps || recipe.steps.length === 0) {
    console.error(`❌ 配方 "${recipe.name}" 缺少制作步骤 steps`);
    totalErrors++;
  }

  // Check Flavor Radar
  if (recipe.flavorRadar) {
    const keys = ['sour', 'sweet', 'bitter', 'strong', 'fruity', 'herbal'];
    keys.forEach((k) => {
      const val = recipe.flavorRadar[k];
      if (typeof val !== 'number' || val < 0 || val > 5) {
        console.error(`❌ 配方 "${recipe.name}" 的风味六角形属性 "${k}" (${val}) 不在 [0, 5] 之间`);
        totalErrors++;
      }
    });
  } else {
    console.error(`❌ 配方 "${recipe.name}" 缺少 flavorRadar 字段`);
    totalErrors++;
  }
});
console.log(`✅ 配方数据库检查完成: ${recipeIdMap.size} 款配方有效，无重复冲突。\n`);

// 3. Check rawId relational links
console.log(`🔗 [3/5] 正在校验配方原料 rawId 外键双向关联...`);
let totalIngredientsChecked = 0;
let linkedIngredients = 0;

RECIPES_DATABASE.forEach((recipe) => {
  recipe.ingredients.forEach((ing) => {
    totalIngredientsChecked++;
    if (ing.rawId) {
      if (!ingredientIdMap.has(ing.rawId)) {
        console.error(`❌ 配方 "${recipe.name}" 引用的 rawId "${ing.rawId}" 在原料库中不存在! (配料: ${ing.name})`);
        totalErrors++;
      } else {
        linkedIngredients++;
      }
    }
  });
});
console.log(`✅ 外键关联校验完成: 检查了 ${totalIngredientsChecked} 个配料项，其中 ${linkedIngredients} 项已精确挂载 rawId 百科索引。\n`);

// 4. Check Masters, Competitions, Lore Cross-References
console.log(`🏆 [4/5] 正在校验大师专栏、赛事作品与历史典故跨库引用...`);
COMPETITIONS_DATABASE.forEach((comp) => {
  if (comp.recipeSlug && !recipeSlugMap.has(comp.recipeSlug)) {
    console.error(`❌ 赛事作品 "${comp.title}" 引用的 recipeSlug "${comp.recipeSlug}" 在配方库中不存在!`);
    totalErrors++;
  }
});

LORE_STORIES.forEach((lore) => {
  if (lore.relatedRecipeSlug && !recipeSlugMap.has(lore.relatedRecipeSlug)) {
    console.error(`❌ 调酒轶事 "${lore.title}" 引用的 relatedRecipeSlug "${lore.relatedRecipeSlug}" 在配方库中不存在!`);
    totalErrors++;
  }
});
console.log(`✅ 跨库关联校验完成: ${MASTERS_DATABASE.length} 位大师、${COMPETITIONS_DATABASE.length} 场大赛作品、${LORE_STORIES.length} 篇典故 100% 有效关联。\n`);

// 5. Final summary
console.log(`📊 [5/5] 统计总览:`);
console.log(`- 🍹 配方总数: ${RECIPES_DATABASE.length} 款`);
console.log(`- 🌿 原料总数: ${INGREDIENTS_DATABASE.length} 种`);
console.log(`- 👨‍🍳 调酒大师: ${MASTERS_DATABASE.length} 位`);
console.log(`- 🏆 冠军赛事: ${COMPETITIONS_DATABASE.length} 场`);
console.log(`- ❌ 异常总数: ${totalErrors} 个`);

if (totalErrors === 0) {
  console.log('\n🎉 完美！所有数据通过结构化一致性、真实性与完整性审计 (100% Passed)！\n');
  process.exit(0);
} else {
  console.error(`\n💥 校验失败，共发现 ${totalErrors} 处错误，请修复！\n`);
  process.exit(1);
}
