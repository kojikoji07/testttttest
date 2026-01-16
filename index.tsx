import React, { useEffect, Fragment } from 'https://esm.sh/react@18.2.0';
import ReactDOM from 'https://esm.sh/react-dom@18.2.0/client';
import { 
  Zap, 
  Users, 
  Target, 
  ArrowRight, 
  Warehouse, 
  Cpu, 
  Rocket, 
  ArrowDown, 
  Plus,
  Printer,
  ChevronRight,
  BrainCircuit,
  Square
} from 'https://esm.sh/lucide-react@0.284.0';

// 基本スライドフレーム
const SlideFrame = ({ children, pageNum, title, subTitle, dark = false }: any) => (
  <div className={`slide ${dark ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'} flex flex-col relative`}>
    <header className="absolute top-0 left-0 w-full p-12 flex justify-between items-start z-20">
      <div className="flex flex-col">
        <div className="flex items-center gap-4 mb-2">
          <div className={`w-2 h-8 ${dark ? 'bg-cyan-500' : 'bg-slate-900'}`}></div>
          <h2 className="text-3xl font-bold tracking-widest">{title}</h2>
        </div>
        {subTitle && <p className={`text-sm tracking-wider pl-6 ${dark ? 'text-slate-400' : 'text-slate-500'}`}>{subTitle}</p>}
      </div>
      <div className="text-right opacity-50">
        <p className="font-orbitron text-xs font-bold tracking-[0.2em]">TABIO NARA</p>
        <p className="font-orbitron text-xs tracking-[0.2em]">AX & CULTURE LAB</p>
      </div>
    </header>

    <main className="flex-grow w-full h-full relative z-10">
      {children}
    </main>

    <footer className="absolute bottom-0 left-0 w-full p-8 px-12 flex justify-between items-end z-20">
      <div className={`text-[10px] tracking-widest ${dark ? 'text-slate-600' : 'text-slate-300'}`}>
        CONFIDENTIAL / INTERNAL USE ONLY
      </div>
      <div className="font-orbitron text-2xl font-bold opacity-20">{pageNum}</div>
    </footer>
  </div>
);

const App = () => {
  const warehouseImg = "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2670&auto=format&fit=crop";

  return (
    <div className="relative">
      <div className="slide-container">
        
        {/* PAGE 1: COVER */}
        <div className="slide bg-slate-50 flex items-center justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-100 skew-x-12 translate-x-20"></div>
          <div className="z-10 text-center">
            <div className="font-orbitron text-cyan-600 font-bold tracking-[0.5em] mb-6">2026年度 Tabio奈良（35期）</div>
            <h1 className="text-6xl font-black text-slate-900 mb-6 tracking-tighter leading-tight">
              AX・カルチャーラボ<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">35期部門方針</span>
            </h1>
            <div className="w-24 h-2 bg-slate-900 mx-auto my-10"></div>
            <div className="flex flex-col gap-2">
              <p className="text-2xl font-bold text-slate-600 tracking-[0.3em]">場所を整え、中身を整える。</p>
              <p className="font-orbitron text-xl font-bold text-slate-400 tracking-[0.6em]">HYBRID LOGIC</p>
            </div>
          </div>
        </div>

        {/* PAGE 2: MISSION */}
        <SlideFrame pageNum="02" title="MISSION" subTitle="経営進化の方程式">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute text-[400px] font-orbitron font-black text-slate-50 select-none z-0 opacity-80" style={{ transform: 'translateY(-20px)' }}>Δ</div>
            <div className="relative z-10 flex items-center gap-8 w-full max-w-6xl px-8">
              <div className="flex gap-6">
                {[
                  { label: 'AX', sub: '主導', IconComponent: Zap, color: 'bg-cyan-500' },
                  { label: 'CULTURE', sub: 'カルチャー', IconComponent: Users, color: 'bg-slate-800' },
                  { label: 'STRATEGY', sub: '戦略遂行', IconComponent: Target, color: 'bg-slate-500' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6">
                    <div className="flex flex-col items-center gap-4 group">
                      <div className={`${item.color} w-40 h-40 rounded-full flex items-center justify-center shadow-xl text-white transition-transform transform group-hover:scale-105`}>
                        <item.IconComponent size={48} />
                      </div>
                      <div className="text-center">
                        <div className="font-orbitron font-bold text-xl text-slate-900">{item.label}</div>
                        <div className="text-xs font-bold text-slate-400 tracking-widest">{item.sub}</div>
                      </div>
                    </div>
                    {i < 2 && <div className="text-4xl text-slate-300 font-light">+</div>}
                  </div>
                ))}
              </div>
              <div className="flex-1 flex justify-center">
                <ArrowRight size={64} className="text-slate-900" />
              </div>
              <div className="flex flex-col items-center">
                <div className="w-56 h-56 border-4 border-slate-900 rounded-full flex flex-col items-center justify-center bg-white shadow-2xl relative">
                  <div className="font-orbitron text-6xl font-black text-slate-900 mb-2">Δ</div>
                  <div className="font-bold text-xl tracking-widest">EVOLUTION</div>
                  <div className="absolute -bottom-12 text-center w-64">
                    <div className="text-2xl font-bold text-slate-900 tracking-[0.2em]">経営進化の加速</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SlideFrame>

        {/* PAGE 3: VISION */}
        <div className="slide relative bg-slate-900 text-white overflow-hidden">
          <img src={warehouseImg} className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale mix-blend-overlay" />
          <div className="absolute inset-0 bg-slate-900/80"></div>
          <div className="relative z-10 w-full h-full flex flex-col justify-center items-center text-center px-20">
            <div className="font-orbitron text-cyan-400 tracking-[1em] mb-12">VISION 2026</div>
            <h2 className="text-7xl font-black leading-tight tracking-widest mb-16">
              人が活き、<br/>AIが支える。
            </h2>
            <div className="max-w-4xl border-t border-b border-white/20 py-12">
              <p className="text-4xl font-bold leading-relaxed tracking-wider">
                AIが<span className="text-cyan-400 font-black">「作業」</span>を整え、<br/>
                人が<span className="text-cyan-400 font-black">「価値」</span>を整える。
              </p>
            </div>
          </div>
          <div className="absolute bottom-10 right-12 font-orbitron opacity-50">03</div>
        </div>

        {/* PAGE 4: BACKGROUND */}
        <div className="slide flex">
          <div className="flex-1 bg-slate-100 flex flex-col justify-center items-center relative">
            <div className="absolute top-12 left-12 font-orbitron text-slate-300 font-bold tracking-widest text-2xl">HARDWARE</div>
            <div className="text-slate-300 mb-8"><Warehouse size={120} strokeWidth={1} /></div>
            <h3 className="text-xs font-bold bg-slate-800 text-white px-4 py-1 rounded-full mb-6 tracking-widest">全社方針</h3>
            <div className="text-4xl font-black text-slate-800 tracking-[0.2em] mb-8">場所を整える</div>
            <div className="text-slate-500 space-y-3 font-bold text-lg text-center px-12">
              <p>● 施設の老朽化修繕</p>
              <p>● 外部倉庫の適正化</p>
              <p>● 新拠点建設の準備</p>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-slate-200">
              <Plus size={40} className="text-cyan-500" />
            </div>
          </div>
          <div className="flex-1 bg-slate-50 flex flex-col justify-center items-center relative border-l border-white">
            <div className="absolute top-12 right-12 font-orbitron text-cyan-100 font-bold tracking-widest text-2xl">SOFTWARE</div>
            <div className="text-cyan-100 mb-8"><BrainCircuit size={120} strokeWidth={1} /></div>
            <h3 className="text-xs font-bold bg-cyan-500 text-white px-4 py-1 rounded-full mb-6 tracking-widest">ラボの役割</h3>
            <div className="text-4xl font-black text-cyan-600 tracking-[0.2em] mb-8">中身を整える</div>
            <div className="text-slate-600 space-y-3 font-bold text-lg text-center px-12">
              <p>● AI需要予測の活用</p>
              <p>● マインドセット変革</p>
              <p>● 経営戦略の現場実装</p>
            </div>
          </div>
          <div className="absolute bottom-10 right-12 font-orbitron opacity-20 text-slate-900">04</div>
        </div>

        {/* PAGE 5: STRATEGY */}
        <SlideFrame pageNum="05" title="STRATEGY & GOAL" subTitle="3つの重点施策とゴールイメージ">
          <div className="bg-grid-pattern absolute inset-0 opacity-50 z-0"></div>
          <div className="relative z-10 grid grid-cols-3 gap-8 px-12 h-full items-center pb-12">
            {[
              { title: 'AX INNOVATION', theme: 'デジタル変革', goal: '勘と経験からの脱却', arrow: 'AI予測による「確信」へ', icon: Cpu, color: 'border-cyan-500', iconColor: 'text-cyan-600' },
              { title: 'CULTURE DESIGN', theme: '風土醸成', goal: '指示待ち組織', arrow: '自律駆動型チームへ', icon: Users, color: 'border-slate-800', iconColor: 'text-slate-800' },
              { title: 'STRATEGY EXECUTION', theme: '戦略遂行', goal: '計画倒れ', arrow: 'スピード実装と成果', icon: Rocket, color: 'border-slate-400', iconColor: 'text-slate-500' }
            ].map((card, i) => (
              <div key={i} className={`bg-white h-[450px] shadow-lg rounded-xl overflow-hidden border-t-8 ${card.color} flex flex-col p-8 transition-transform hover:-translate-y-2`}>
                <div className="flex justify-between items-start mb-8">
                  <card.icon size={48} className={card.iconColor} />
                  <span className="font-orbitron text-xs text-slate-300 font-bold tracking-widest">0{i+1}</span>
                </div>
                <h3 className="font-orbitron font-bold text-lg mb-1">{card.title}</h3>
                <p className="text-sm text-slate-400 font-bold mb-8">{card.theme}</p>
                <div className="mt-auto bg-slate-50 p-6 rounded-lg space-y-4 text-center">
                  <div className="flex items-center justify-center gap-2 text-slate-400">
                    <span className="text-[10px] font-bold border border-slate-300 px-1 rounded">BEFORE</span>
                    <span className="text-sm font-medium line-through">{card.goal}</span>
                  </div>
                  <div className="flex justify-center text-slate-300">
                    <ArrowDown size={20} />
                  </div>
                  <div className="flex items-center justify-center gap-2 text-slate-900">
                    <span className={`text-[10px] font-bold px-1 rounded text-white ${card.iconColor.replace('text', 'bg')}`}>AFTER</span>
                    <span className="text-sm font-bold">{card.arrow}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SlideFrame>

        {/* PAGE 7: ROADMAP */}
        <SlideFrame pageNum="07" title="ROADMAP 2026" subTitle="段階的な実装と定着のプロセス">
          <div className="relative h-full flex items-end justify-center px-12 pb-20 gap-4">
            {[
              { q: '1Q', title: '基盤構築', sub: 'システム導入・教育', h: '30%', color: 'bg-slate-200', text: 'text-slate-500' },
              { q: '2Q', title: '本格稼働', sub: '現場運用・定着', h: '50%', color: 'bg-slate-400', text: 'text-white' },
              { q: '3Q', title: '実装・効果測定', sub: 'PDCA・成功体験', h: '70%', color: 'bg-slate-600', text: 'text-white' },
              { q: '4Q', title: '標準化・展開', sub: '文化定着・次期構想', h: '90%', color: 'bg-gradient-to-t from-slate-900 to-cyan-800', text: 'text-white' }
            ].map((step, i) => (
              <div key={i} className={`flex-1 ${step.color} ${step.text} relative rounded-t-lg transition-all hover:opacity-90 flex flex-col items-center justify-start pt-8 shadow-lg`} style={{ height: step.h }}>
                <div className="font-orbitron font-bold text-3xl mb-2 opacity-50">{step.q}</div>
                <div className="w-8 h-1 bg-current opacity-30 mb-6"></div>
                <h4 className="font-bold text-xl tracking-widest mb-2 text-center">{step.title}</h4>
                <p className="text-xs font-medium opacity-80 tracking-wider text-center">{step.sub}</p>
              </div>
            ))}
            <div className="absolute top-20 right-20 flex flex-col text-right">
              <span className="font-orbitron text-6xl font-black text-cyan-500 opacity-20">GOAL</span>
              <span className="text-slate-400 font-bold tracking-widest">自走する組織へ</span>
            </div>
          </div>
        </SlideFrame>

        {/* PAGE 8: CLOSING */}
        <div className="slide relative bg-white flex items-center justify-center overflow-hidden">
          <img src={warehouseImg} className="absolute inset-0 w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-white/80"></div>
          <div className="relative z-10 text-center flex flex-col items-center gap-10">
            <h2 className="text-5xl font-black text-slate-900 leading-tight tracking-widest drop-shadow-sm">
              タビオの物流現場を整える<br/>
              <span className="text-7xl mt-6 block text-slate-900">今、<span className="text-cyan-600">中身</span>も整える。</span>
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full"></div>
            <p className="text-2xl font-bold text-slate-600 tracking-[0.3em] leading-relaxed text-center">
              未来の事業成長を支えるため、<br/>
              最強の「ソフト」を構築します。
            </p>
          </div>
          <div className="absolute bottom-12 w-full text-center opacity-40">
            <p className="font-orbitron text-sm font-bold tracking-[1em] text-slate-400 uppercase">
              Transforming Logistics, Refining Culture
            </p>
          </div>
          <div className="absolute bottom-10 right-12 font-orbitron opacity-50 text-slate-300">08</div>
        </div>

      </div>

      {/* 印刷ボタン */}
      <div className="no-print fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4">
        <div className="bg-slate-800 text-white text-xs px-4 py-2 rounded shadow-lg opacity-90 border border-white/10">
          PDF保存時は「背景のグラフィック」を有効にしてください
        </div>
        <button 
          onClick={() => window.print()} 
          className="bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-4 rounded-full shadow-2xl font-bold tracking-widest flex items-center gap-2 transition-all hover:scale-105"
        >
          <Printer size={20} />
          PRINT / SAVE PDF
        </button>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);