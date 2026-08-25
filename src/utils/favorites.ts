// Favorites and Tasting Notes Storage Utility for Elixir & Shadow

export interface TastingNote {
  recipeSlug: string;
  rating: number; // 1-5
  note: string;
  tags: string[];
  updatedAt: string;
}

const FAVORITES_KEY = 'elixir_favorite_recipes';
const NOTES_KEY = 'elixir_tasting_notes';

export const getFavoriteSlugs = (): string[] => {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(FAVORITES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error(e);
    return [];
  }
};

export const isRecipeFavorite = (slug: string): boolean => {
  const list = getFavoriteSlugs();
  return list.includes(slug);
};

export const toggleFavoriteRecipe = (slug: string): boolean => {
  if (typeof window === 'undefined') return false;
  try {
    const list = getFavoriteSlugs();
    let updated: string[];
    let isNowFav: boolean;
    if (list.includes(slug)) {
      updated = list.filter(s => s !== slug);
      isNowFav = false;
    } else {
      updated = [...list, slug];
      isNowFav = true;
    }
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
    window.dispatchEvent(new CustomEvent('elixir_favorites_changed', { detail: { slug, isNowFav, count: updated.length } }));
    return isNowFav;
  } catch (e) {
    console.error(e);
    return false;
  }
};

export const getTastingNotes = (): Record<string, TastingNote> => {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(NOTES_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    console.error(e);
    return {};
  }
};

export const getRecipeTastingNote = (slug: string): TastingNote | null => {
  const notes = getTastingNotes();
  return notes[slug] || null;
};

export const saveRecipeTastingNote = (note: TastingNote): void => {
  if (typeof window === 'undefined') return;
  try {
    const notes = getTastingNotes();
    notes[note.recipeSlug] = note;
    localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
    window.dispatchEvent(new CustomEvent('elixir_notes_changed', { detail: note }));
  } catch (e) {
    console.error(e);
  }
};
