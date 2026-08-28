export type CursorModeId = 'native' | 'lens' | 'capsule' | 'caustics';

export interface CursorModeConfig {
  id: CursorModeId;
  name: string;
  nameEn: string;
  badge: string;
  tagline: string;
  description: string;
  icon: string;
  highlightColor: string;
  features: string[];
}

export const CURSOR_MODES: CursorModeConfig[] = [
  {
    id: 'native',
    name: '原版 Windows 极简',
    nameEn: 'Native Minimalist',
    badge: '纯净 · 零延迟 · 经典',
    tagline: '彻底回归系统原生指针，无任何浮层干扰与拖尾圈，享受极致流畅与纯粹',
    description: '隐藏全部屏幕跟随图层与点击圈，保留纯净利落的系统原生指针，聚焦于卡片本身的微光聚光与按键物理回弹。最适合深度阅读与专业调酒配方速查。',
    icon: '↖',
    highlightColor: 'from-slate-400 to-slate-200',
    features: ['零渲染开销与零鼠标延迟', '无任何浮层遮挡文字内容', '保留卡片内 Spotlight 微光', '经典桌面级纯粹人机交互']
  },
  {
    id: 'lens',
    name: '琥珀流体透镜',
    nameEn: 'Amber Fluid Lens',
    badge: '光学折射 · 表面张力 · 奢华',
    tagline: '宛若一枚盛满陈年烈酒的水晶平底杯，在字里行间折射微光与流体涟漪',
    description: '搭载 Backdrop 磨砂与微色散折射率的物理透镜，划过文字时如凸透镜般光学聚焦；点击瞬间在坐标原点激起一滴苦精落入酒面的表面张力流体微涟漪。',
    icon: '🔍',
    highlightColor: 'from-amber-400 to-gold-500',
    features: ['高折射率磨砂玻璃透镜', '文字与配方光学微聚焦', '表面张力酒滴微波纹点击', '弹性阻尼物理惯性跟随']
  },
  {
    id: 'capsule',
    name: '语义动态胶囊',
    nameEn: 'Semantic Chameleon',
    badge: '先锋杂志 · 智能感知 · 动效',
    tagline: '平时为 2.5px 极微暗金星芒，悬停即变身磁吸信息胶囊与操作指引',
    description: '平时极度克制不挡视线，当悬停在酒品卡片时平滑展开为深黑曜石微型胶囊，动态呈现酒精度与认证标签（如 [IBA SPEC · 38% ABV]）；点击迸发琥珀微粒金尘。',
    icon: '✦',
    highlightColor: 'from-gold-400 to-amber-600',
    features: ['常态 2.5px 暗金星芒微点', '滑入卡片自动展开信息胶囊', '拖拽与复制智能语义变形', '点击琥珀微粒云雾物理散逸']
  },
  {
    id: 'caustics',
    name: '暗室水晶焦散',
    nameEn: 'Darkroom Caustics',
    badge: '光影焦散 · 物理反光 · 沉浸',
    tagline: '光标化作不可见的移动射灯，在深黑吧台折射真金法线火彩与光斑',
    description: '完全不渲染浮动指针外壳，光标化为移动点光源。移动时黑曜石材质与 0.5px 细金边框产生真实法线高光反光，点击时产生一道极轻的光压微扩散。',
    icon: '✨',
    highlightColor: 'from-gold-300 via-amber-400 to-yellow-600',
    features: ['完全隐形无外壳光标', '鼠标化身暗室移动点光源', '卡片边缘真金法线高光反光', '光子压力脉冲点击反馈']
  }
];

export const DEFAULT_CURSOR_MODE: CursorModeId = 'native';