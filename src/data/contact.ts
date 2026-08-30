/**
 * 影之甘露 (Elixir & Shadow) - 联系方式与商务合作全局配置
 * 网站上线域名: https://mixshadow.xyz
 *
 * 💡 修改指南：
 * 后续只需在此文件中修改对应字段，全站（页脚、关于页面、商务弹窗等）将自动同步更新。
 */

export interface BusinessCollaboration {
  title: string;
  tag: string;
  description: string;
  iconName: string;
  highlights: string[];
}

export const CONTACT_CONFIG = {
  // 品牌与站点信息
  siteName: 'Elixir & Shadow (影之甘露)',
  domain: 'mixshadow.xyz',
  siteUrl: 'https://mixshadow.xyz',

  // 1. 邮箱联系方式
  email: {
    business: '3246636956@qq.com', // 商务与品牌合作邮箱
    support: '3246636956@qq.com',   // 站长日常交流与反馈邮箱
    compliance: '3246636956@qq.com', // 知识产权与法务申诉邮箱
  },

  // 2. 微信联系方式
  wechat: {
    wechatId: 'kuhakuyyds', // 您的微信号 / 商务微信
    title: '官方微信',
    description: '添加微信请备注「影之甘露+合作/交流意向」，快速对接沟通',
    qrCodeImage: '/images/wechat-qr.png', // 可选二维码图片路径
  },

  // 国内商业化合作场景与业务板块
  collaborations: [
    {
      title: '酒水与器具品牌推广',
      tag: 'Brand Partnership',
      description: '为精品烈酒、利口酒、果汁糖浆及专业调酒器具品牌提供高匹配度场景植入、特色配方研发及原料推荐位。',
      iconName: 'Wine',
      highlights: ['精准触达调酒爱好者与主理人', '原料百科专属品牌推荐', '联名特色鸡尾酒谱共创'],
    },
    {
      title: '实体酒吧数字化酒单定制',
      tag: 'B2B Solution',
      description: '基于本站独创的客用派对酒单与风味雷达系统，为线下鸡尾酒吧、私人影音吧、派对露营提供定制化数字酒单与海报生成方案。',
      iconName: 'Sparkles',
      highlights: ['多主题 UI 与动态风味雷达', '扫码即看 ABV 与风味拆解', '支持私有化品牌与个性化定制'],
    },
    {
      title: '线下特调沙龙与品鉴活动',
      tag: 'Events & Workshop',
      description: '联合品牌方或线下空间，承接调酒品鉴沙龙、公司团建鸡尾酒工坊、主题微醺快闪活动的方案策划与酒谱支持。',
      iconName: 'GlassWater',
      highlights: ['专业调酒手法教学大纲', '定制主题派对特调酒单', '趣味调酒学堂课件支持'],
    },
    {
      title: '调酒知识库与 API 数据合作',
      tag: 'Data & Tech',
      description: '提供结构化全中文 IBA 经典配方、原料风味矩阵、风味轮与调配算法等数字化资产授权与技术集成服务。',
      iconName: 'Code',
      highlights: ['精准 ABV/融冰物理计算算法', '丰富中英文双语酒谱元数据', '标准化 JSON/RESTful 数据接口'],
    },
  ] as BusinessCollaboration[],

  // 国内合规与备案信息（待备案成功后填入）
  icp: {
    beianNumber: '沪ICP备XXXXXXXX号-1',
    beianUrl: 'https://beian.miit.gov.cn/',
    publicSecurityBeian: '',
  },
};
