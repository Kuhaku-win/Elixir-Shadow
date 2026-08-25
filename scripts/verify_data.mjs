import { RECIPES_DATABASE } from '../src/data/recipes.ts';
import { INGREDIENTS_DATABASE } from '../src/data/ingredients.ts';

console.log('🧪 开始运行 Elixir & Shadow 数据完整性与一致性审计...\n');

let totalErrors = 0;

// 1. Check Ingredient database
console.log(`📦 [1/4] 正在检查原材料数据库 (${INGREDIENTS_DATABASE.length} 项)...`);
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
console.log(`✅ 原料数据库检查完成: ${ingredientIdMap.size} 项有效，无重复冲突。\n`);

// 2. Check Recipe database
console.log(`🍸 [2/4] 正在检查鸡尾酒配方数据库 (${RECIPES_DATABASE.length} 款)...`);
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
console.log(`🔗 [3/4] 正在校验配方原料 rawId 外键双向关联...`);
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

// 4. Final summary
console.log(`📊 [4/4] 统计总览:`);
console.log(`- 🍹 配方总数: ${RECIPES_DATABASE.length} 款`);
console.log(`- 🌿 原料总数: ${INGREDIENTS_DATABASE.length} 种`);
console.log(`- ❌ 异常总数: ${totalErrors} 个`);

if (totalErrors === 0) {
  console.log('\n🎉 完美！所有数据通过结构化一致性与完整性校验 (100% Passed)！\n');
  process.exit(0);
} else {
  console.error(`\n💥 校验失败，共发现 ${totalErrors} 处错误，请修复！\n`);
  process.exit(1);
}
