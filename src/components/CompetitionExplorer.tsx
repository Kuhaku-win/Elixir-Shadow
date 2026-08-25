import React, { useState, useMemo } from 'react';
import { 
  Trophy, Award, Search, Sparkles, ArrowRight, Calendar, 
  User, Globe, RefreshCw, Wine, ExternalLink, Filter, CheckCircle2
} from 'lucide-react';
import { COMPETITIONS_DATABASE } from '../data/competitions';
import { searchCocktailDbByName } from '../services/cocktaildb';
import type { Competition, Recipe } from '../types/cocktail';

export default function CompetitionExplorer() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [onlineResults, setOnlineResults] = useState<Recipe[]>([]);
  const [isOnlineSearching, setIsOnlineSearching] = useState(false);
  const [hasSearchedOnline, setHasSearchedOnline] = useState(false);

  // Filter local championship database
  const filteredCompetitions = useMemo(() => {
    return COMPETITIONS_DATABASE.filter((comp) => {
      const matchSearch = 
        comp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        comp.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        comp.bartender.toLowerCase().includes(searchQuery.toLowerCase()) ||
        comp.competitionName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        comp.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
        comp.year.toString().includes(searchQuery);

      if (!matchSearch) return false;

      if (selectedCategory === 'all') return true;
      if (selectedCategory === 'bacardi') return comp.competitionName.includes('Bacardi') || comp.competitionName.includes('百加得');
      if (selectedCategory === 'japan') return comp.country.includes('日本');
      if (selectedCategory === 'national') return comp.competitionName.includes('锦标赛') || comp.competitionName.includes('Championship');
      if (selectedCategory === 'modern') return comp.year >= 2000;

      return true;
    });
  }, [searchQuery, selectedCategory]);

  // Handle Online Search via TheCocktailDB API
  const handleOnlineSearch = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!searchQuery.trim()) return;

    setIsOnlineSearching(true);
    setHasSearchedOnline(true);
    try {
      const results = await searchCocktailDbByName(searchQuery.trim());
      setOnlineResults(results);
    } catch (err) {
      console.error('Online search error:', err);
      setOnlineResults([]);
    } finally {
      setIsOnlineSearching(false);
    }
  };

  return (
    <div className="space-y-10">
      
      {/* Search & Filter Toolbar */}
      <div className="p-4 sm:p-6 rounded-2xl bg-obsidian-850 border border-gold-500/25 shadow-gold-glow space-y-4">
        
        {/* Search Bar Form */}
        <form onSubmit={handleOnlineSearch} className="flex flex-col sm:flex-row items-center gap-3">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="搜索冠军作品、调酒师 (如后闲信吾、上田和男)、年份或赛事..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-obsidian-900 border border-white/10 text-slate-100 text-xs sm:text-sm focus:outline-none focus:border-gold-500 transition-colors placeholder:text-slate-500"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setHasSearchedOnline(false);
                  setOnlineResults([]);
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-200"
              >
                清空
              </button>
            )}
          </div>

          <button
            type="submit"
            disabled={isOnlineSearching || !searchQuery.trim()}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gold-500 hover:bg-gold-400 disabled:opacity-50 text-obsidian-950 font-bold text-xs transition-all shadow-gold-glow flex items-center justify-center gap-2 whitespace-nowrap"
          >
            {isOnlineSearching ? (
              <>
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                <span>在线检索中...</span>
              </>
            ) : (
              <>
                <Globe className="w-3.5 h-3.5" />
                <span>在线联网拓展检索</span>
              </>
            )}
          </button>
        </form>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/5 text-xs">
          <span className="text-slate-400 font-semibold mr-1 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5 text-gold-400" />
            赛事流派：
          </span>
          {[
            { id: 'all', label: '全部精选冠军' },
            { id: 'bacardi', label: '百加得传世赛 (Bacardi Legacy)' },
            { id: 'japan', label: '日本大师冠军作' },
            { id: 'national', label: '国家级官方锦标赛' },
            { id: 'modern', label: '21世纪现代经典' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                selectedCategory === cat.id
                  ? 'bg-gold-500 text-obsidian-950 font-bold shadow-sm'
                  : 'bg-obsidian-900 text-slate-300 hover:text-gold-300 border border-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

      </div>

      {/* Online Search Results (If user searched online) */}
      {hasSearchedOnline && (
        <div className="p-6 rounded-2xl bg-obsidian-850 border border-gold-500/30 space-y-6 shadow-gold-glow animate-in fade-in duration-300">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-gold-400" />
              <div>
                <h3 className="text-base font-serif font-bold text-slate-100">
                  全球 TheCocktailDB 国际在线数据库匹配结果
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  关键词 “{searchQuery}” · 找到 {onlineResults.length} 款国际配方
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                setHasSearchedOnline(false);
                setOnlineResults([]);
              }}
              className="text-xs text-gold-400 hover:underline"
            >
              关闭在线结果
            </button>
          </div>

          {onlineResults.length === 0 ? (
            <div className="text-center py-8 text-slate-400 text-xs space-y-2">
              <p>未在国际数据库中找到相关酒谱，建议尝试英文关键词（如 "Margarita", "Sour", "Martini"）。</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {onlineResults.map((r) => (
                <div 
                  key={r.id}
                  className="rounded-xl bg-obsidian-900 border border-white/10 hover:border-gold-500/40 p-4 space-y-3 transition-all group flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="h-44 w-full rounded-lg overflow-hidden bg-black border border-white/5">
                      <img 
                        src={r.image} 
                        alt={r.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-gold-500/15 text-gold-300 border border-gold-500/30">
                          {r.baseSpiritZh}基底
                        </span>
                        <span className="text-[10px] text-slate-400">{r.glass.split('/')[0]}</span>
                      </div>
                      <h4 className="text-base font-serif font-bold text-slate-100 mt-1.5 group-hover:text-gold-300 transition-colors">
                        {r.name}
                      </h4>
                      <p className="text-xs text-slate-400 line-clamp-2 mt-1 leading-relaxed">
                        {r.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                    <span className="text-[11px] text-amber-400 font-mono font-bold">{r.abv}% ABV</span>
                    <a
                      href={`/recipes`}
                      className="text-gold-400 hover:text-gold-300 font-medium inline-flex items-center gap-1"
                    >
                      <span>在酒谱库查阅</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Main Championship Showcase List */}
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Trophy className="w-4 h-4 text-amber-400" />
            <h3 className="text-lg font-serif font-bold text-slate-100">
              权威认证冠军酒单 ({filteredCompetitions.length} 款)
            </h3>
          </div>
          <span className="text-xs text-slate-400">
            100% 真实实拍摄影 · 杜绝虚假贴图与错误配比
          </span>
        </div>

        {filteredCompetitions.length === 0 ? (
          <div className="text-center py-16 rounded-2xl bg-obsidian-850 border border-white/5 space-y-3">
            <Trophy className="w-10 h-10 text-slate-600 mx-auto" />
            <p className="text-sm text-slate-300">未找到符合条件的冠军作品</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="text-xs text-gold-400 hover:underline"
            >
              重置所有筛选
            </button>
          </div>
        ) : (
          filteredCompetitions.map((comp) => (
            <div 
              key={comp.id}
              className="rounded-2xl bg-obsidian-850 border border-gold-500/25 p-6 sm:p-10 shadow-gold-glow overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center hover:border-gold-500/50 transition-all duration-300"
            >
              {/* High-Res Verified Real Image */}
              <div className="lg:col-span-5 h-64 sm:h-80 rounded-xl overflow-hidden border border-white/10 shadow-lg relative group bg-black">
                {comp.image ? (
                  <img
                    src={comp.image}
                    alt={comp.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-obsidian-800 via-obsidian-900 to-obsidian-950 p-6 text-center">
                    <Trophy className="w-12 h-12 text-gold-400/40 mb-3 group-hover:scale-110 transition-transform duration-500" />
                    <span className="text-base font-serif text-slate-200 font-bold">{comp.title}</span>
                    <span className="text-xs text-gold-400/80 mt-1 font-sans">{comp.titleEn}</span>
                    <span className="text-[11px] text-slate-400 mt-3 px-3 py-1 rounded-full border border-gold-500/20 bg-obsidian-950/80">
                      权威文献特调收录 · 纯正配方档案
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-200">
                  <span className="px-2.5 py-1 rounded-full bg-obsidian-950/85 border border-gold-500/40 text-gold-300 font-mono text-[10px] backdrop-blur-md">
                    {comp.year} 冠军档案
                  </span>
                  <span className="text-[10px] text-slate-300 bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
                    {comp.image ? '真实酒品实拍' : '纯正配方特录'}
                  </span>
                </div>
              </div>

              {/* Content Details */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center gap-1.5">
                    <Trophy className="w-3.5 h-3.5" />
                    {comp.award}
                  </span>
                  <span className="text-xs text-slate-400 font-mono flex items-center gap-1 bg-obsidian-900 px-2.5 py-1 rounded border border-white/5">
                    <Calendar className="w-3 h-3 text-gold-400" />
                    {comp.year} 年
                  </span>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-100">
                    {comp.title}
                  </h2>
                  <p className="text-xs text-gold-400 font-sans tracking-wide mt-0.5">
                    {comp.titleEn} · {comp.competitionName}
                  </p>
                </div>

                {/* Creator & Country */}
                <div className="flex items-center gap-4 text-xs text-slate-300 py-2 border-y border-white/5">
                  <span className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-gold-400" />
                    调酒师：<strong className="text-slate-100">{comp.bartender}</strong>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-emerald-400" />
                    代表国家/地区：<strong>{comp.country}</strong>
                  </span>
                </div>

                {/* Inspiration Story */}
                <div className="space-y-1.5 bg-obsidian-900/70 p-4 rounded-xl border border-white/5 text-xs text-slate-300 leading-relaxed">
                  <span className="text-gold-400 font-semibold uppercase tracking-wider block">
                    创作灵感与大赛评语：
                  </span>
                  <p className="text-justify font-sans">{comp.inspiration}</p>
                </div>

                {/* CTA button */}
                <div className="pt-2">
                  <a
                    href={`/recipes/${comp.recipeSlug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-obsidian-950 font-bold text-xs transition-all shadow-gold-glow"
                  >
                    <span>查看完整酒谱与精准克数</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

              </div>
            </div>
          ))
        )}
      </div>

    </div>
  );
}
