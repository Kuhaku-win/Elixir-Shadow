import React, { useState, useEffect } from 'react';
import { CONTACT_CONFIG } from '../data/contact';
import {
  Mail,
  Copy,
  Check,
  X,
  Sparkles,
  MessageCircle,
  Briefcase,
  Send,
  HelpCircle,
} from 'lucide-react';

interface ContactModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function ContactModal({ isOpen: controlledOpen, onClose }: ContactModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'contact' | 'cooperation'>('contact');

  // Listen to global custom event and click triggers across the DOM
  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-contact-modal', handleOpen);

    const handleClickDelegation = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest('[data-contact-trigger]');
      if (target) {
        e.preventDefault();
        setIsOpen(true);
      }
    };
    document.addEventListener('click', handleClickDelegation);

    return () => {
      window.removeEventListener('open-contact-modal', handleOpen);
      document.removeEventListener('click', handleClickDelegation);
    };
  }, []);

  // Handle controlled state
  useEffect(() => {
    if (controlledOpen !== undefined) {
      setIsOpen(controlledOpen);
    }
  }, [controlledOpen]);

  const handleClose = () => {
    setIsOpen(false);
    if (onClose) onClose();
  };

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
      setTimeout(() => {
        setCopiedType(null);
      }, 2500);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={handleClose}
    >
      {/* Modal Container */}
      <div
        className="relative w-full max-w-xl bg-obsidian-900 border border-gold-500/30 rounded-2xl shadow-2xl overflow-hidden text-slate-200 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-white/10 bg-obsidian-950/60">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gold-500/20 border border-gold-500/40 flex items-center justify-center text-gold-400">
              <Briefcase className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-base sm:text-lg text-slate-100 flex items-center gap-2">
                商务合作与联系我们
              </h3>
              <p className="text-[11px] text-slate-400">
                Elixir &amp; Shadow · 微信与邮箱快捷联络通道
              </p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-white/5 bg-obsidian-950/40 px-6 pt-2">
          <button
            onClick={() => setActiveTab('contact')}
            className={`pb-2.5 px-3 text-xs sm:text-sm font-medium border-b-2 transition-all flex items-center gap-1.5 ${
              activeTab === 'contact'
                ? 'border-gold-400 text-gold-300 font-semibold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>微信与邮箱联系</span>
          </button>
          <button
            onClick={() => setActiveTab('cooperation')}
            className={`pb-2.5 px-3 text-xs sm:text-sm font-medium border-b-2 transition-all flex items-center gap-1.5 ${
              activeTab === 'cooperation'
                ? 'border-gold-400 text-gold-300 font-semibold'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>合作场景与业务</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5">
          {activeTab === 'contact' ? (
            <div className="space-y-4">
              {/* WeChat Card */}
              <div className="p-4 rounded-xl bg-obsidian-850 border border-emerald-500/30 hover:border-emerald-500/50 transition-all flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                      <MessageCircle className="w-4 h-4" />
                      官方微信（推荐）
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                      即时沟通
                    </span>
                  </div>
                  <div className="font-mono text-base sm:text-lg font-bold text-slate-100 select-all tracking-wide">
                    {CONTACT_CONFIG.wechat.wechatId}
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    {CONTACT_CONFIG.wechat.description}
                  </p>
                </div>

                <button
                  onClick={() => copyToClipboard(CONTACT_CONFIG.wechat.wechatId, 'wechat')}
                  className="w-full py-2.5 px-3 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all active:scale-[0.98] cursor-pointer shadow-sm"
                >
                  {copiedType === 'wechat' ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span>已复制微信号！请在微信中粘贴添加</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>一键复制微信号 ({CONTACT_CONFIG.wechat.wechatId})</span>
                    </>
                  )}
                </button>
              </div>

              {/* Email Card */}
              <div className="p-4 rounded-xl bg-obsidian-850 border border-gold-500/30 hover:border-gold-500/50 transition-all flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-gold-400 flex items-center gap-1.5">
                      <Mail className="w-4 h-4" />
                      商务合作邮箱
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-gold-500/10 text-gold-300 border border-gold-500/20">
                      24小时内回复
                    </span>
                  </div>
                  <div className="font-mono text-sm sm:text-base font-bold text-slate-100 select-all truncate">
                    {CONTACT_CONFIG.email.business}
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    支持接收品牌合作介绍、酒单定制需求、商务提案等详细材料
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => copyToClipboard(CONTACT_CONFIG.email.business, 'email')}
                    className="flex-1 py-2.5 px-3 rounded-lg bg-gold-500/20 hover:bg-gold-500/30 text-gold-300 border border-gold-500/40 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all active:scale-[0.98] cursor-pointer"
                  >
                    {copiedType === 'email' ? (
                      <>
                        <Check className="w-4 h-4 text-gold-400" />
                        <span>已复制邮箱</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>复制邮箱</span>
                      </>
                    )}
                  </button>
                  <a
                    href={`mailto:${CONTACT_CONFIG.email.business}?subject=${encodeURIComponent(
                      '【影之甘露】商务合作洽谈意向'
                    )}&body=${encodeURIComponent(
                      '您好，我对「影之甘露 (Elixir & Shadow)」平台很感兴趣，以下是我们的合作意向：\n\n1. 合作类型（品牌推广 / 酒单定制 / 活动合作 / 其他）：\n2. 机构/品牌/个人名称：\n3. 具体合作设想或需求：\n4. 期望对接联系人及电话：\n'
                    )}`}
                    className="py-2.5 px-4 rounded-lg bg-gold-500 hover:bg-gold-400 text-obsidian-950 text-xs font-bold flex items-center justify-center gap-1.5 transition-all whitespace-nowrap active:scale-[0.98]"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>立即发信</span>
                  </a>
                </div>
              </div>

              {/* Tips */}
              <div className="p-3 rounded-lg bg-gold-500/5 border border-gold-500/15 text-[11px] text-slate-400 flex items-start gap-2">
                <HelpCircle className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <span>
                  联系时请简要注明您的<strong>称呼、所属品牌/机构及合作诉求</strong>，以便我们高效对接。
                </span>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {CONTACT_CONFIG.collaborations.map((collab, index) => (
                  <div
                    key={index}
                    className="p-3.5 rounded-xl bg-obsidian-850 border border-white/5 hover:border-gold-500/30 transition-all space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs sm:text-sm font-bold text-gold-300 flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                        {collab.title}
                      </h4>
                      <span className="text-[9px] font-mono text-slate-500 uppercase px-1.5 py-0.5 rounded bg-white/5">
                        {collab.tag}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                      {collab.description}
                    </p>
                    <div className="space-y-0.5 pt-1 border-t border-white/5">
                      {collab.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="text-[10px] text-slate-400 flex items-center gap-1.5">
                          <span className="text-gold-400 text-[10px]">✓</span>
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-3.5 rounded-xl bg-obsidian-950 border border-gold-500/20 text-center space-y-1.5">
                <p className="text-xs text-slate-300">
                  有其他创新合作想法或定制需求？
                </p>
                <button
                  onClick={() => setActiveTab('contact')}
                  className="px-4 py-1.5 rounded-lg bg-gold-500 hover:bg-gold-400 text-obsidian-950 font-bold text-xs transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>切换至微信与邮箱联络</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-6 py-3 border-t border-white/10 bg-obsidian-950/80 flex flex-col sm:flex-row items-center justify-between gap-1 text-[11px] text-slate-500">
          <span>影之甘露 · mixshadow.xyz</span>
          <span className="text-slate-400 font-mono">期待与您共创微醺商业价值</span>
        </div>
      </div>
    </div>
  );
}
