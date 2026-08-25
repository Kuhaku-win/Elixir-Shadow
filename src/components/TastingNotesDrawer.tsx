import React, { useState, useEffect } from 'react';
import { Star, Edit3, Save, Check, Sparkles, Tag, Heart } from 'lucide-react';
import { getRecipeTastingNote, saveRecipeTastingNote, isRecipeFavorite, toggleFavoriteRecipe, type TastingNote } from '../utils/favorites';

interface TastingNotesDrawerProps {
  recipeSlug: string;
  recipeName: string;
}

const PRESET_TAGS = [
  '适合夏夜微醺',
  '酒感偏硬朗',
  '清爽酸甜解腻',
  '女生大爱果香',
  '适合露营轰趴',
  '需精准冰温',
  '重度泥煤爱好者'
];

export default function TastingNotesDrawer({ recipeSlug, recipeName }: TastingNotesDrawerProps) {
  const [rating, setRating] = useState<number>(5);
  const [note, setNote] = useState<string>('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isSaved, setIsSaved] = useState(false);
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    const existing = getRecipeTastingNote(recipeSlug);
    if (existing) {
      setRating(existing.rating || 5);
      setNote(existing.note || '');
      setSelectedTags(existing.tags || []);
    }
    setIsFav(isRecipeFavorite(recipeSlug));
  }, [recipeSlug]);

  const handleToggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const handleSave = () => {
    const newNote: TastingNote = {
      recipeSlug,
      rating,
      note,
      tags: selectedTags,
      updatedAt: new Date().toISOString()
    };
    saveRecipeTastingNote(newNote);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2500);
  };

  const handleToggleFav = () => {
    const updated = toggleFavoriteRecipe(recipeSlug);
    setIsFav(updated);
  };

  return (
    <div className="rounded-2xl bg-obsidian-850 border border-gold-500/25 p-6 sm:p-7 space-y-5 shadow-gold-glow">
      <div className="flex items-center justify-between border-b border-white/5 pb-4">
        <div className="flex items-center gap-2">
          <Edit3 className="w-5 h-5 text-gold-400" />
          <h3 className="text-lg font-serif font-bold text-slate-100">
            调酒师私房品饮笔记与口感打分
          </h3>
        </div>

        <button
          onClick={handleToggleFav}
          className={`px-3 py-1.5 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-all ${
            isFav
              ? 'bg-rose-500/20 text-rose-300 border-rose-500/40 shadow-sm'
              : 'bg-obsidian-900 border-white/10 text-slate-400 hover:text-rose-300 hover:border-rose-500/30'
          }`}
        >
          <Heart className={`w-3.5 h-3.5 ${isFav ? 'fill-rose-400 text-rose-400' : ''}`} />
          <span>{isFav ? '已收藏此酒谱' : '收藏到酒柜'}</span>
        </button>
      </div>

      {/* 5-Star Rating */}
      <div className="flex items-center gap-4 text-xs">
        <span className="text-slate-400 font-medium">个人风味评级：</span>
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => setRating(star)}
              className="p-1 hover:scale-125 transition-transform"
              title={`${star} 星`}
            >
              <Star
                className={`w-5 h-5 ${
                  star <= rating
                    ? 'fill-amber-400 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]'
                    : 'text-slate-600'
                }`}
              />
            </button>
          ))}
          <span className="text-amber-400 font-mono font-bold text-sm ml-2">
            {rating}.0 / 5.0
          </span>
        </div>
      </div>

      {/* Custom Note Input */}
      <div className="space-y-1.5 text-xs">
        <label className="text-slate-400 font-medium block">
          私房微调配比与口感心得：
        </label>
        <textarea
          rows={3}
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="例如：下次制作单糖浆减 5ml，改用黑麦威士忌与重度冰镇古典杯，口感更坚挺！"
          className="w-full bg-obsidian-900 border border-white/10 rounded-xl p-3 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-gold-500/50 leading-relaxed resize-none"
        />
      </div>

      {/* Preset Impression Tags */}
      <div className="space-y-2 text-xs">
        <span className="text-slate-400 font-medium flex items-center gap-1.5">
          <Tag className="w-3.5 h-3.5 text-gold-400" />
          <span>口感标签速选：</span>
        </span>
        <div className="flex flex-wrap gap-1.5">
          {PRESET_TAGS.map((tag) => {
            const isSelected = selectedTags.includes(tag);
            return (
              <button
                key={tag}
                onClick={() => handleToggleTag(tag)}
                className={`text-[11px] px-2.5 py-1 rounded-lg border transition-all ${
                  isSelected
                    ? 'bg-gold-500/20 text-gold-300 border-gold-500/40 font-medium'
                    : 'bg-obsidian-900 border-white/5 text-slate-400 hover:border-gold-500/30 hover:text-slate-200'
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </div>

      {/* Save Button */}
      <div className="pt-2 flex items-center justify-between">
        <span className="text-[11px] text-slate-500">
          * 笔记与评分自动持久化保存在当前设备中
        </span>

        <button
          onClick={handleSave}
          className="px-5 py-2 rounded-xl bg-gold-500/20 border border-gold-500/40 text-gold-300 hover:bg-gold-500 hover:text-obsidian-950 font-bold text-xs transition-all flex items-center gap-1.5 shadow-sm"
        >
          {isSaved ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span>已保存笔记</span>
            </>
          ) : (
            <>
              <Save className="w-3.5 h-3.5" />
              <span>保存品饮笔记</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
