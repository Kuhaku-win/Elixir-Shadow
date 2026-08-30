import React, { useState } from 'react';
import { CONTACT_CONFIG } from '../data/contact';
import {
  Briefcase,
  Mail,
  Copy,
  Check,
  Sparkles,
  Send,
  MessageCircle,
  ArrowRight,
  TrendingUp,
} from 'lucide-react';

export default function CommercialCooperation() {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const copyToClipboard = async (text: string, type: string) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopiedType(type);
      setTimeout(() => setCopiedType(null), 2500);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const triggerModal = () => {
    window.dispatchEvent(new CustomEvent('open-contact-modal'));
  };

  return (
    <section id="commercial-partnership" className="space-y-6 pt-6 border-t border-white/10 scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gold-500/10 text-gold-400 text-xs font-semibold uppercase tracking-wider">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Business &amp; Partnership</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-100 flex items-center gap-2">
            <span>商业合作与联系我们</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            开放赋能国内鸡尾酒生态 · 探索数字化酒单、品牌联名、线下品鉴与技术授权
          </p>
        </div>

        <button
          onClick={triggerModal}
          className="self-start sm:self-center px-4 py-2 rounded-xl bg-gradient-to-r from-gold-500 to-amber-500 hover:from-gold-400 hover:to-amber-400 text-obsidian-950 font-bold text-xs sm:text-sm shadow-gold-glow hover:shadow-gold-glow-lg transition-all flex items-center gap-1.5 flex-shrink-0 cursor-pointer"
        >
          <Briefcase className="w-4 h-4" />
          <span>商务洽谈快捷通道</span>
        </button>
      </div>

      {/* 4 Cooperation Pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {CONTACT_CONFIG.collaborations.map((item, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-obsidian-900/80 border border-gold-500/20 hover:border-gold-500/40 hover:bg-obsidian-900 transition-all duration-300 space-y-3 shadow-md flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono text-gold-400/90 font-semibold px-2 py-0.5 rounded bg-gold-500/10 border border-gold-500/20">
                  {item.tag}
                </span>
                <span className="text-slate-500 text-xs font-serif font-bold">0{idx + 1}</span>
              </div>
              <h3 className="text-base font-bold text-slate-100 font-serif flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-gold-400" />
                <span>{item.title}</span>
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="space-y-1.5 pt-2 border-t border-white/5">
              {item.highlights.map((highlight, hIdx) => (
                <div key={hIdx} className="text-xs text-slate-400 flex items-center gap-2">
                  <span className="text-gold-400 font-bold">✓</span>
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Direct Contact Action Panel (WeChat & Email Only) */}
      <div className="p-6 rounded-2xl bg-gradient-to-br from-obsidian-900 via-obsidian-850 to-obsidian-900 border border-gold-500/30 shadow-gold-glow space-y-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="text-base font-bold text-gold-300 flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-gold-400" />
              <span>官方微信与商务邮箱</span>
            </h3>
            <p className="text-xs text-slate-400">
              欢迎酒水品牌主理人、实体酒吧主理人、调酒师及爱好者联系交流
            </p>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs text-slate-400 bg-obsidian-950 px-2.5 py-1 rounded-lg border border-white/10">
              响应时效: 1 个工作日内
            </span>
          </div>
        </div>

        {/* Contact Method Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 border-t border-white/10">
          {/* WeChat */}
          <div className="p-4 rounded-xl bg-obsidian-950/80 border border-emerald-500/30 hover:border-emerald-500/50 transition-all flex flex-col justify-between space-y-3">
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                  <MessageCircle className="w-3.5 h-3.5" />
                  官方微信（推荐）
                </span>
                <span className="text-[10px] text-slate-500">备注「影之甘露」优先通过</span>
              </div>
              <div className="font-mono text-base font-bold text-slate-100 select-all">
                {CONTACT_CONFIG.wechat.wechatId}
              </div>
            </div>
            <button
              onClick={() => copyToClipboard(CONTACT_CONFIG.wechat.wechatId, 'wechat-about')}
              className="w-full py-2 px-3 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all active:scale-[0.98] cursor-pointer"
            >
              {copiedType === 'wechat-about' ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>已复制微信号！请在微信中粘贴搜索</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>一键复制微信号</span>
                </>
              )}
            </button>
          </div>

          {/* Business Email */}
          <div className="p-4 rounded-xl bg-obsidian-950/80 border border-gold-500/30 hover:border-gold-500/50 transition-all flex flex-col justify-between space-y-3">
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gold-400 font-semibold flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5" />
                  商务合作邮箱
                </span>
                <span className="text-[10px] text-slate-500">支持接收详细材料与提案</span>
              </div>
              <div className="font-mono text-xs sm:text-sm font-bold text-slate-100 select-all truncate">
                {CONTACT_CONFIG.email.business}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => copyToClipboard(CONTACT_CONFIG.email.business, 'email-about')}
                className="flex-1 py-2 px-2.5 rounded-lg bg-gold-500/20 hover:bg-gold-500/30 text-gold-300 border border-gold-500/30 text-xs font-semibold flex items-center justify-center gap-1 transition-all active:scale-[0.98] cursor-pointer"
              >
                {copiedType === 'email-about' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-gold-400" />
                    <span>已复制邮箱</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>复制邮箱</span>
                  </>
                )}
              </button>
              <a
                href={`mailto:${CONTACT_CONFIG.email.business}?subject=${encodeURIComponent(
                  '【影之甘露】商务合作咨询'
                )}&body=${encodeURIComponent(
                  '您好，我对「影之甘露」平台的商业合作很感兴趣：\n\n1. 合作类型：\n2. 机构/品牌名称：\n3. 合作诉求与简介：\n4. 联系人与电话：\n'
                )}`}
                className="py-2 px-3.5 rounded-lg bg-gold-500 hover:bg-gold-400 text-obsidian-950 text-xs font-bold flex items-center justify-center gap-1 transition-all whitespace-nowrap active:scale-[0.98]"
              >
                <Send className="w-3 h-3" />
                <span>直接发信</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-1 flex items-center justify-between text-xs text-slate-400">
          <span className="text-slate-500">微信与邮箱均由站长及团队专人对接，欢迎随时联络。</span>
          <button
            onClick={triggerModal}
            className="text-gold-400 hover:text-gold-300 font-semibold text-xs flex items-center gap-1 transition-colors cursor-pointer"
          >
            <span>打开合作服务弹窗</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
