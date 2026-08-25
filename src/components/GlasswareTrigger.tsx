import React, { useState } from 'react';
import { Wine, Info, Sparkles } from 'lucide-react';
import GlasswareModal from './GlasswareModal';

interface GlasswareTriggerProps {
  glassName: string;
}

export default function GlasswareTrigger({ glassName }: GlasswareTriggerProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div 
        onClick={() => setIsOpen(true)}
        className="group/glass cursor-pointer select-none transition-all hover:bg-gold-500/10 -m-1.5 p-1.5 rounded-lg"
        title="点击查看杯型物理与历史典故微百科"
      >
        <span className="text-slate-500 block mb-0.5 text-[11px] flex items-center justify-between">
          <span>适用杯具</span>
          <span className="text-[10px] text-gold-400 opacity-0 group-hover/glass:opacity-100 transition-opacity">
            查看百科 📖
          </span>
        </span>
        <strong className="text-gold-300 block truncate font-medium group-hover/glass:text-gold-200 flex items-center gap-1">
          <span>{glassName.split('/')[0]}</span>
          <Info className="w-3 h-3 text-gold-400/70 inline flex-shrink-0" />
        </strong>
      </div>

      <GlasswareModal
        currentGlassName={glassName}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}
