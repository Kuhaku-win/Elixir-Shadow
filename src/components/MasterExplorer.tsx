import React, { useState, useEffect, useMemo } from 'react';
import type { Master } from '../types/cocktail';
import { searchOnlineMasters, ONLINE_MASTERS_CATALOG } from '../services/mastersService';
import { RECIPES_DATABASE } from '../data/recipes';
import MasterAvatar from './MasterAvatar';
import { 
  Search, Sparkles, Globe, Award, RotateCcw, Loader2, 
  Quote, ExternalLink, Filter, CheckCircle2, Bookmark, BookmarkCheck,
  Wine, ArrowUpRight
} from 'lucide-react';

/**
 * 智能解析大师代表作与系统配方库的映射关系
 */
function resolveDrinkLink(drinkName: string): { url: string; isDirectRecipe: boolean; recipeTitle?: string } {
  const cleanName = drinkName.toLowerCase();
  const directSlug = cleanName.replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const bySlug = RECIPES_DATABASE.find(r => r.slug === directSlug);
  if (bySlug) {
    return { url: `/recipes/${bySlug.slug}`, isDirectRecipe: true, recipeTitle: bySlug.name };
  }

  const enPart = drinkName.split('(')[0].trim().toLowerCase();
  const zhMatch = drinkName.match(/\((.*?)\)/);
  const zhPart = zhMatch ? zhMatch[1].trim() : '';

  const matched = RECIPES_DATABASE.find(r => 
    (enPart && r.nameEn.toLowerCase() === enPart) ||
    (enPart && r.name.toLowerCase() === enPart) ||
    (enPart && r.slug === enPart.replace(/\s+/g, '-')) ||
    (enPart && r.nameEn.toLowerCase().includes(enPart) && enPart.length > 4) ||
    (zhPart && r.name.includes(zhPart)) ||
    (zhPart && r.nameEn.toLowerCase().includes(zhPart.toLowerCase()))
  );

  if (matched) {
    return { url: `/recipes/${matched.slug}`, isDirectRecipe: true, recipeTitle: matched.name };
  }

  // 降级为在配方库中进行关键词检索
  const searchQuery = enPart || zhPart || drinkName;
  return { 
    url: `/recipes?search=${encodeURIComponent(searchQuery)}`, 
    isDirectRecipe: false 
  };
}

interface MasterExplorerProps {
  initialMasters: Master[];
}

export default function MasterExplorer({ initialMasters }: MasterExplorerProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'resident' | 'online' | 'asian' | 'western' | 'golden'>('all');
  const [onlineMasters, setOnlineMasters] = useState<Master[]>([]);
  const [isSearchingOnline, setIsSearchingOnline] = useState(false);
  const [pinnedIds, setPinnedIds] = useState<string[]>([]);

  // Load pinned masters from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('elixir_pinned_masters');
      if (saved) setPinnedIds(JSON.parse(saved));
    } catch (e) {
      console.error(e);
    }
  }, []);

  // Quick search keywords
  const quickKeywords = [
    { label: '后闲信吾 (Shingo Gokan)', q: '后闲信吾' },
    { label: '杰里·托马斯 (Jerry Thomas)', q: '杰里·托马斯' },
    { label: '戴尔·戴格罗夫 (Dale DeGroff)', q: '戴尔·戴格罗夫' },
    { label: '萨沙·佩特拉斯克 (Sasha Petraske)', q: '萨沙' },
    { label: '哈里·克拉多克 (Harry Craddock)', q: '哈里' },
    { label: '萨尔瓦托雷 (Salvatore)', q: '萨尔瓦托雷' },
    { label: '奥黛丽·桑德斯 (Audrey Saunders)', q: '奥黛丽' },
    { label: '上野秀嗣 (Hidetsugu Ueno)', q: '上野秀嗣' },
    { label: '维克多 (Trader Vic)', q: '迈泰' }
  ];

  // Perform online search with debounce
  useEffect(() => {
    const trimmed = searchQuery.trim();
    if (!trimmed) {
      setOnlineMasters([]);
      setIsSearchingOnline(false);
      return;
    }

    setIsSearchingOnline(true);
    const timer = setTimeout(async () => {
      try {
        const results = await searchOnlineMasters(trimmed);
        // Exclude masters already in initialMasters by id or name
        const uniqueOnline = results.filter(
          om => !initialMasters.some(im => im.id === om.id || im.nameEn.toLowerCase() === om.nameEn.toLowerCase())
        );
        setOnlineMasters(uniqueOnline);
      } catch (err) {
        console.error('Online search error:', err);
      } finally {
        setIsSearchingOnline(false);
      }
    }, 280);

    return () => clearTimeout(timer);
  }, [searchQuery, initialMasters]);

  // Load all online catalog masters when user clicks "全部在线大师" tab
  const handleLoadAllOnline = () => {
    const uniqueOnline = ONLINE_MASTERS_CATALOG.filter(
      om => !initialMasters.some(im => im.id === om.id || im.nameEn.toLowerCase() === om.nameEn.toLowerCase())
    );
    setOnlineMasters(uniqueOnline);
  };

  // Combine resident masters + online dynamic results
  const combinedMasters = useMemo(() => {
    const map = new Map<string, Master>();
    
    // Add resident masters
    initialMasters.forEach(m => map.set(m.id, { ...m, isOnlineSource: false }));
    
    // Add online masters
    onlineMasters.forEach(m => {
      if (!map.has(m.id)) {
        map.set(m.id, m);
      }
    });

    let list = Array.from(map.values());

    // Filter by search query if local filtering is needed
    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      list = list.filter(m =>
        m.name.toLowerCase().includes(q) ||
        m.nameEn.toLowerCase().includes(q) ||
        m.bar.toLowerCase().includes(q) ||
        m.country.toLowerCase().includes(q) ||
        m.title.toLowerCase().includes(q) ||
        m.bio.toLowerCase().includes(q) ||
        m.philosophy.toLowerCase().includes(q) ||
        m.signatureCocktails.some(c => c.toLowerCase().includes(q))
      );
    }

    // Filter by tab
    if (activeFilter === 'resident') {
      list = list.filter(m => !m.isOnlineSource);
    } else if (activeFilter === 'online') {
      list = list.filter(m => m.isOnlineSource);
    } else if (activeFilter === 'asian') {
      list = list.filter(m => m.country.includes('日本') || m.country.includes('中国') || m.country.includes('亚洲') || m.country.includes('华裔'));
    } else if (activeFilter === 'western') {
      list = list.filter(m => m.country.includes('美国') || m.country.includes('英国') || m.country.includes('意大利') || m.country.includes('法国') || m.country.includes('西班牙'));
    } else if (activeFilter === 'golden') {
      list = list.filter(m => m.era === 'golden-age' || m.title.includes('之父') || m.title.includes('黄金时代') || m.title.includes('鼻祖') || m.title.includes('萨伏伊'));
    }

    return list;
  }, [initialMasters, onlineMasters, searchQuery, activeFilter]);

  // Toggle pin
  const handleTogglePin = (id: string) => {
    setPinnedIds(prev => {
      const next = prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id];
      try {
        localStorage.setItem('elixir_pinned_masters', JSON.stringify(next));
      } catch (e) {
        console.error(e);
      }
      return next;
    });
  };

  return (
    <div className="space-y-8">
      
      {/* 1. Interactive Search & Live Expansion Console */}
      <div className="rounded-2xl bg-obsidian-850 border border-gold-500/30 p-5 sm:p-6 shadow-gold-glow space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-serif font-bold text-slate-100 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span>大师智库实时检索与在线扩充</span>
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              内置 {initialMasters.length} 位常驻殿堂大师，支持实时在线检索全球 30+ 位历史传奇宗师、世界大赛冠军与维基百科名录
            </p>
          </div>

          {/* Real-time Status Badge */}
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>在线智库就绪</span>
            </span>
          </div>
        </div>

        {/* Search Input Box */}
        <div className="relative flex items-center">
          <Search className="absolute left-4 w-4 h-4 text-gold-400/80 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="输入大师姓名、英文名、所属酒吧（如 Milk & Honey）、国籍或代表作（如 盘尼西林、迈泰）..."
            className="w-full pl-11 pr-24 py-3 rounded-xl bg-obsidian-900 border border-gold-500/20 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-gold-500/60 focus:ring-1 focus:ring-gold-500/60 transition-all"
          />

          <div className="absolute right-3 flex items-center gap-1.5">
            {isSearchingOnline && (
              <Loader2 className="w-4 h-4 text-gold-400 animate-spin" />
            )}
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-xs px-2 py-1 rounded bg-obsidian-800 text-slate-400 hover:text-white border border-white/10"
              >
                清除
              </button>
            )}
          </div>
        </div>

        {/* Quick Search Chips */}
        <div className="space-y-1.5 pt-1">
          <span className="text-[11px] text-gold-400/80 font-semibold block">全球传奇大师快捷索引：</span>
          <div className="flex flex-wrap gap-1.5">
            {quickKeywords.map((item, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setSearchQuery(item.q);
                  if (activeFilter === 'resident') setActiveFilter('all');
                }}
                className="text-xs px-2.5 py-1 rounded-lg bg-obsidian-900/90 text-slate-300 border border-white/10 hover:border-gold-500/40 hover:text-gold-300 transition-all flex items-center gap-1"
              >
                <span>{item.label}</span>
              </button>
            ))}

            <button
              onClick={handleLoadAllOnline}
              className="text-xs px-3 py-1 rounded-lg bg-gold-500/15 text-gold-300 border border-gold-500/40 hover:bg-gold-500/25 transition-all font-semibold flex items-center gap-1"
            >
              <Globe className="w-3 h-3" />
              <span>载入全部在线大师名录 (20+ 位)</span>
            </button>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-white/5">
          <div className="flex flex-wrap gap-1.5">
            {[
              { key: 'all', label: '全部宗师' },
              { key: 'resident', label: '👑 常驻殿堂大师' },
              { key: 'online', label: '🌐 在线实时扩充' },
              { key: 'asian', label: '🇯🇵 银座与亚洲宗师' },
              { key: 'western', label: '🇺🇸 欧美现代先锋' },
              { key: 'golden', label: '📜 黄金时代鼻祖' }
            ].map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveFilter(tab.key as any)}
                className={`text-xs px-3 py-1.5 rounded-lg border transition-all ${
                  activeFilter === tab.key
                    ? 'bg-gold-500 text-obsidian-950 border-gold-400 font-bold shadow-gold-glow'
                    : 'bg-obsidian-900 text-slate-400 border-white/5 hover:border-white/20 hover:text-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="text-xs text-slate-400 font-mono">
            显示 <strong className="text-gold-300">{combinedMasters.length}</strong> 位大师
            {onlineMasters.length > 0 && (
              <span className="text-slate-500 ml-1">
                (常驻 {initialMasters.length} · 在线扩充 {onlineMasters.length})
              </span>
            )}
          </div>
        </div>
      </div>

      {/* 2. Masters Cards Grid (100% Identical Presentation Format) */}
      {combinedMasters.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {combinedMasters.map((master) => {
            const isPinned = pinnedIds.includes(master.id);
            return (
              <div
                key={master.id}
                id={master.id}
                className="group relative rounded-2xl bg-obsidian-850 border border-gold-500/20 p-6 space-y-5 hover:border-gold-500/50 transition-all shadow-gold-glow flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Top Header: Avatar, Badges & Basic Info */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-4">
                      <div className="relative flex-shrink-0">
                        <MasterAvatar master={master} size={64} />
                        {master.isOnlineSource ? (
                          <span 
                            title="在线实时扩充收录" 
                            className="absolute -bottom-1 -right-1 p-0.5 rounded-full bg-blue-600 text-white border border-obsidian-900 shadow-sm"
                          >
                            <Globe className="w-3 h-3" />
                          </span>
                        ) : (
                          <span 
                            title="常驻殿堂大师" 
                            className="absolute -bottom-1 -right-1 p-0.5 rounded-full bg-gold-500 text-obsidian-950 border border-obsidian-900 shadow-sm"
                          >
                            <Award className="w-3 h-3" />
                          </span>
                        )}
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-serif font-bold text-slate-100 group-hover:text-gold-300 transition-colors">
                            {master.name}
                          </h3>
                        </div>
                        <p className="text-xs text-gold-400 font-sans tracking-wide">{master.nameEn}</p>
                        <p className="text-[11px] text-slate-400 mt-0.5">{master.bar} · {master.country}</p>
                      </div>
                    </div>

                    {/* Pin to favorites button */}
                    <button
                      onClick={() => handleTogglePin(master.id)}
                      title={isPinned ? "取消常驻收藏" : "收藏至常驻大师"}
                      className={`p-1.5 rounded-lg border transition-all ${
                        isPinned 
                          ? 'bg-gold-500/20 text-gold-300 border-gold-500/50' 
                          : 'bg-obsidian-900/80 text-slate-500 border-white/5 hover:text-slate-300'
                      }`}
                    >
                      {isPinned ? <BookmarkCheck className="w-4 h-4 text-gold-400" /> : <Bookmark className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Title & Origin Badge */}
                  <div className="space-y-2 text-xs">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="inline-block font-semibold px-2.5 py-0.5 rounded bg-gold-500/10 text-gold-300 border border-gold-500/20">
                        {master.title}
                      </span>
                      {master.isOnlineSource && (
                        <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/30">
                          在线扩展智库
                        </span>
                      )}
                    </div>

                    <p className="text-slate-300 leading-relaxed text-justify line-clamp-4 group-hover:line-clamp-none transition-all">
                      {master.bio}
                    </p>
                  </div>

                  {/* Master Philosophy Quote Box */}
                  <div className="p-3.5 rounded-xl bg-obsidian-900/80 border border-white/5 space-y-1 relative">
                    <span className="text-[10px] text-gold-400 font-semibold uppercase tracking-wider block flex items-center gap-1">
                      <Quote className="w-2.5 h-2.5 text-gold-400" />
                      <span>调酒哲学 / Philosophy</span>
                    </span>
                    <p className="text-xs text-slate-300 italic font-serif leading-relaxed">
                      “{master.philosophy}”
                    </p>
                  </div>
                </div>

                {/* Signature Drinks Footer */}
                <div className="pt-3 border-t border-white/5 text-xs">
                  <div className="flex items-center justify-between text-slate-400 font-medium mb-1.5">
                    <span>代表名作与传世配方：</span>
                    <span className="text-[10px] text-gold-400/80 font-mono">点击直达配方 ↗</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {master.signatureCocktails.map((drink, i) => {
                      const linkInfo = resolveDrinkLink(drink);
                      return (
                        <a
                          key={i}
                          href={linkInfo.url}
                          title={linkInfo.isDirectRecipe ? `查看「${linkInfo.recipeTitle}」标准配方与调制教学` : `在配方库中检索「${drink}」`}
                          className="group/drink inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded-md bg-obsidian-800 text-gold-300 border border-gold-500/20 hover:border-gold-500/60 hover:bg-gold-500/20 hover:text-gold-100 transition-all shadow-sm cursor-pointer"
                        >
                          {linkInfo.isDirectRecipe ? (
                            <Wine className="w-3 h-3 text-gold-400 group-hover/drink:scale-110 transition-transform flex-shrink-0" />
                          ) : (
                            <Search className="w-2.5 h-2.5 text-slate-400 group-hover/drink:text-gold-300 flex-shrink-0" />
                          )}
                          <span>{drink}</span>
                          <ArrowUpRight className="w-2.5 h-2.5 opacity-60 group-hover/drink:opacity-100 group-hover/drink:translate-x-0.5 group-hover/drink:-translate-y-0.5 transition-all flex-shrink-0" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Empty State */
        <div className="rounded-2xl bg-obsidian-850 border border-gold-500/20 p-12 text-center space-y-4 shadow-gold-glow">
          <Globe className="w-12 h-12 text-gold-400/40 mx-auto" />
          <h3 className="text-lg font-serif font-bold text-slate-100">未找到符合条件的大师</h3>
          <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed">
            您可以尝试更换搜索关键词，或者点击下方按钮重置回常驻大师殿堂。
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setActiveFilter('all');
            }}
            className="px-4 py-2 rounded-xl bg-gold-500 hover:bg-gold-400 text-obsidian-950 text-xs font-bold transition-all shadow-gold-glow inline-flex items-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>重置为常驻大师</span>
          </button>
        </div>
      )}

    </div>
  );
}
