export type SupportedLocale = 'zh-CN' | 'en' | 'ja' | 'fr' | 'es';

export interface LocaleMeta {
  code: SupportedLocale;
  name: string;        // Native name
  englishName: string;
  flag: string;
  tagline: string;
}

export interface I18nDictionary {
  meta: {
    title: string;
    description: string;
    slogan: string;
    subSlogan: string;
  };
  nav: {
    recipes: string;
    ingredients: string;
    myBar: string;
    lab: string;
    partyMenu: string;
    favorites: string;
    masters: string;
    academy: string;
    themes: string;
    search: string;
    searchPlaceholder: string;
    language: string;
    theme: string;
  };
  common: {
    all: string;
    cancel: string;
    confirm: string;
    close: string;
    back: string;
    loading: string;
    noResults: string;
    copy: string;
    copied: string;
    share: string;
    reset: string;
    favorite: string;
    unfavorite: string;
    switchLanguage: string;
    currentLanguage: string;
    pressShortcutToSwitch: string;
  };
  recipes: {
    title: string;
    subtitle: string;
    filterByBase: string;
    filterByFlavor: string;
    filterByDifficulty: string;
    filterByTechnique: string;
    sortBy: string;
    sortRecommended: string;
    sortAbvAsc: string;
    sortAbvDesc: string;
    sortPinyin: string;
    abvBadge: string;
    proTips: string;
    historyStory: string;
    ingredientsTitle: string;
    stepsTitle: string;
    flavorRadarTitle: string;
    glassware: string;
    ice: string;
    technique: string;
    ibaCertified: string;
    startTimer: string;
    scaleServings: string;
    tastingNotes: string;
    shareCard: string;
    barMode: string;
  };
  myBar: {
    title: string;
    subtitle: string;
    woodCabinet: string;
    myIngredients: string;
    canMake100: string;
    canMakeWithSubs: string;
    missingOne: string;
    topRestockRoi: string;
    emptyCabinetTip: string;
    unlocksCount: string;
    copyList: string;
  };
  lab: {
    title: string;
    subtitle: string;
    customVolume: string;
    estimatedAbv: string;
    predictedFlavor: string;
    dilutionCurve: string;
    startExperiment: string;
    resetBeakers: string;
  };
  partyMenu: {
    title: string;
    subtitle: string;
    selectDrinks: string;
    chooseTheme: string;
    exportPoster: string;
    guestMode: string;
    exportSuccess: string;
  };
}
