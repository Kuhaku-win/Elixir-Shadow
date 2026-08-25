import React, { useState } from 'react';
import type { Master } from '../types/cocktail';

interface MasterAvatarProps {
  master: Pick<Master, 'name' | 'nameEn' | 'avatar' | 'gender' | 'era' | 'title'>;
  size?: number;
  className?: string;
}

/**
 * 自动识别调酒大师性别
 */
export function detectMasterGender(master: Pick<Master, 'name' | 'nameEn' | 'gender'>): 'male' | 'female' {
  if (master.gender) return master.gender;
  const name = (master.name + ' ' + master.nameEn).toLowerCase();
  if (
    name.includes('ada') || 
    name.includes('coleman') || 
    name.includes('艾达') || 
    name.includes('audrey') || 
    name.includes('saunders') || 
    name.includes('奥黛丽') || 
    name.includes('monica') || 
    name.includes('berg') || 
    name.includes('莫妮卡') ||
    name.includes('maria') ||
    name.includes('玛丽亚') ||
    name.includes('woman') ||
    name.includes('教母') ||
    name.includes('女主理')
  ) {
    return 'female';
  }
  return 'male';
}

/**
 * 获取大师姓名缩写 (如 "Jerry Thomas" -> "JT", "上田和男" -> "上田")
 */
function getMasterInitials(nameEn: string, nameZh: string): string {
  const enWords = nameEn.replace(/[^a-zA-Z\s]/g, '').trim().split(/\s+/);
  if (enWords.length >= 2) {
    return `${enWords[0][0]}${enWords[enWords.length - 1][0]}`.toUpperCase();
  }
  return nameZh.slice(0, 2);
}

export default function MasterAvatar({ master, size = 64, className = '' }: MasterAvatarProps) {
  const [imgError, setImgError] = useState(false);
  const gender = detectMasterGender(master);
  const initials = getMasterInitials(master.nameEn, master.name);

  const hasPhoto = Boolean(master.avatar && master.avatar.trim() && !imgError);

  return (
    <div 
      className={`relative rounded-full flex items-center justify-center overflow-hidden select-none border-2 border-gold-500/40 shadow-md ${className}`}
      style={{ width: size, height: size }}
    >
      {hasPhoto ? (
        <img
          src={master.avatar}
          alt={master.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          onError={() => setImgError(true)}
        />
      ) : (
        /* Q-Version Stylized Vector Bartender Portrait (带性别的精致 Q 版调酒师矢量头像) */
        <div className="w-full h-full relative flex items-center justify-center bg-obsidian-950">
          {gender === 'female' ? (
            /* Female Master Bartender Q-Version Vector (女性调酒大师 Q 版) */
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="femaleBgGrad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#2e1065" />
                  <stop offset="50%" stopColor="#1e1b4b" />
                  <stop offset="100%" stopColor="#0f172a" />
                </linearGradient>
                <linearGradient id="femaleHairGrad" x1="20" y1="15" x2="80" y2="60" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#4c1d95" />
                  <stop offset="100%" stopColor="#1e1b4b" />
                </linearGradient>
                <linearGradient id="femaleVestGrad" x1="25" y1="65" x2="75" y2="100" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#7c3aed" />
                  <stop offset="100%" stopColor="#4c1d95" />
                </linearGradient>
                <linearGradient id="goldRibbonGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#fde047" />
                  <stop offset="100%" stopColor="#d97706" />
                </linearGradient>
              </defs>

              {/* Background */}
              <rect width="100" height="100" fill="url(#femaleBgGrad)" />
              
              {/* Soft Ambient Rim Light */}
              <circle cx="50" cy="40" r="38" fill="#a855f7" opacity="0.15" />

              {/* Hair Back Updo */}
              <circle cx="50" cy="30" r="22" fill="url(#femaleHairGrad)" />
              <circle cx="50" cy="18" r="12" fill="url(#femaleHairGrad)" />

              {/* Face */}
              <circle cx="50" cy="42" r="18" fill="#fde047" opacity="0.9" />

              {/* Hair Bangs & Bob Side Tuft */}
              <path
                d="M32 36 C32 24, 68 24, 68 36 C68 46, 64 50, 64 50 C60 40, 40 40, 36 50 C36 50, 32 46, 32 36 Z"
                fill="url(#femaleHairGrad)"
              />

              {/* Eyes & Smile */}
              <circle cx="44" cy="42" r="2" fill="#1e1b4b" />
              <circle cx="56" cy="42" r="2" fill="#1e1b4b" />
              <path d="M47 48 Q50 52 53 48" stroke="#1e1b4b" strokeWidth="1.5" strokeLinecap="round" fill="none" />

              {/* Elegant Blush */}
              <circle cx="41" cy="46" r="2.5" fill="#f43f5e" opacity="0.45" />
              <circle cx="59" cy="46" r="2.5" fill="#f43f5e" opacity="0.45" />

              {/* White Shirt Collar */}
              <path d="M43 56 L50 63 L57 56 L50 54 Z" fill="#ffffff" />
              
              {/* Bow Tie / Gold Ribbon */}
              <path d="M46 59 L54 63 M54 59 L46 63" stroke="url(#goldRibbonGrad)" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="50" cy="61" r="2" fill="#fbbf24" />

              {/* Bartender Vest & Body */}
              <path
                d="M26 84 C28 66, 40 62, 50 62 C60 62, 72 66, 74 84 L76 100 L24 100 Z"
                fill="url(#femaleVestGrad)"
              />
              <path d="M40 62 L47 78 L50 100 L53 78 L60 62 Z" fill="#ffffff" opacity="0.85" />
              <path d="M47 70 L53 70 M48 76 L52 76" stroke="#fbbf24" strokeWidth="1.5" />

              {/* Gold Border Ring */}
              <circle cx="50" cy="50" r="48" stroke="#d97706" strokeWidth="2.5" opacity="0.6" />
            </svg>
          ) : (
            /* Male Master Bartender Q-Version Vector (男性调酒大师 Q 版) */
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="maleBgGrad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#1e1b4b" />
                  <stop offset="50%" stopColor="#0f172a" />
                  <stop offset="100%" stopColor="#020617" />
                </linearGradient>
                <linearGradient id="maleHairGrad" x1="20" y1="15" x2="80" y2="45" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#451a03" />
                  <stop offset="100%" stopColor="#1c1917" />
                </linearGradient>
                <linearGradient id="maleVestGrad" x1="25" y1="65" x2="75" y2="100" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#1e293b" />
                  <stop offset="100%" stopColor="#0f172a" />
                </linearGradient>
                <linearGradient id="maleGoldGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#fbbf24" />
                  <stop offset="100%" stopColor="#d97706" />
                </linearGradient>
              </defs>

              {/* Background */}
              <rect width="100" height="100" fill="url(#maleBgGrad)" />

              {/* Soft Ambient Warm Glow */}
              <circle cx="50" cy="40" r="38" fill="#d97706" opacity="0.15" />

              {/* Hair Back */}
              <circle cx="50" cy="32" r="22" fill="url(#maleHairGrad)" />

              {/* Face */}
              <circle cx="50" cy="42" r="19" fill="#fde68a" opacity="0.95" />

              {/* Gentleman Hair Pompadour / Side Part */}
              <path
                d="M30 36 C30 20, 52 16, 68 24 C72 28, 70 36, 70 38 C64 30, 48 30, 34 38 Z"
                fill="url(#maleHairGrad)"
              />

              {/* Eyes & Dapper Eyebrows */}
              <path d="M41 37 Q45 35 48 37" stroke="#451a03" strokeWidth="1.5" strokeLinecap="round" fill="none" />
              <path d="M52 37 Q55 35 59 37" stroke="#451a03" strokeWidth="1.5" strokeLinecap="round" fill="none" />
              <circle cx="44" cy="41" r="2" fill="#1c1917" />
              <circle cx="56" cy="41" r="2" fill="#1c1917" />

              {/* Classic Bartender Mustache & Gentle Smile */}
              <path
                d="M44 47 C47 45, 49 48, 50 49 C51 48, 53 45, 56 47 C57 49, 53 51, 50 50 C47 51, 43 49, 44 47 Z"
                fill="#451a03"
              />
              <path d="M48 53 Q50 55 52 53" stroke="#451a03" strokeWidth="1" strokeLinecap="round" fill="none" />

              {/* White Dress Shirt Collar */}
              <path d="M41 57 L50 65 L59 57 L50 55 Z" fill="#ffffff" />

              {/* Gold Bow Tie */}
              <polygon points="45,59 55,65 55,59 45,65" fill="url(#maleGoldGrad)" />
              <circle cx="50" cy="62" r="2" fill="#fef08a" />

              {/* Tailored Bartender Vest & Body */}
              <path
                d="M24 86 C26 67, 38 63, 50 63 C62 63, 74 67, 76 86 L78 100 L22 100 Z"
                fill="url(#maleVestGrad)"
              />
              {/* White Shirt Placket */}
              <path d="M45 64 L48 76 L50 100 L52 76 L55 64 Z" fill="#ffffff" opacity="0.9" />
              <circle cx="50" cy="72" r="1" fill="#fbbf24" />
              <circle cx="50" cy="82" r="1" fill="#fbbf24" />

              {/* Gold Border Ring */}
              <circle cx="50" cy="50" r="48" stroke="#d97706" strokeWidth="2.5" opacity="0.6" />
            </svg>
          )}

          {/* Bottom Initials Pill */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 px-1.5 py-0.2 rounded-full bg-obsidian-950/95 border border-gold-500/60 shadow-sm text-[9px] font-mono font-bold text-gold-300 leading-none">
            {initials}
          </div>
        </div>
      )}
    </div>
  );
}
