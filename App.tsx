
import React, { useState, useEffect, Suspense } from 'react';
import Scene3D from './components/Scene3D.tsx';
import { FEATURES, PRICING_PLANS, TESTIMONIALS, FAQ_ITEMS } from './constants.tsx';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [has3DError, setHas3DError] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#030712] text-slate-200 selection:bg-purple-500/30">
      {/* Header */}
      <nav className={`fixed top-0 w-full z-[60] transition-all duration-300 ${isScrolled ? 'glass py-4 shadow-lg' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-3xl font-black gradient-text tracking-tighter">CVEEEZ</div>
          <div className="hidden md:flex gap-8 text-sm font-semibold">
            <a href="#features" className="hover:text-purple-400 transition-colors">المميزات</a>
            <a href="#services" className="hover:text-purple-400 transition-colors">الخدمات</a>
            <a href="#pricing" className="hover:text-purple-400 transition-colors">الأسعار</a>
            <a href="#faq" className="hover:text-purple-400 transition-colors">الأسئلة</a>
          </div>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg shadow-purple-500/20">
            ابدأ الآن
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 z-0 bg-radial-at-t from-purple-900/20 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#030712] to-transparent z-10 pointer-events-none" />

        <Suspense fallback={null}>
          {!has3DError && <Scene3D onError={() => setHas3DError(true)} />}
        </Suspense>
        
        <div className="container mx-auto px-6 relative z-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center md:text-right">
            <div className="inline-block glass px-4 py-1 rounded-full text-xs font-bold text-purple-400 mb-4 border-purple-500/20">
              مستقبلك المهني يبدأ هنا ✨
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              سيرتك الذاتية هي <br />
              <span className="gradient-text">بوابتك للوظيفة</span> <br />
              اللي تحلم بيها
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-lg mx-auto md:mr-0 leading-relaxed">
              مع CVEEEZ، بنحول خبراتك لقصة نجاح بتعدي من أنظمة الـ ATS وتلفت نظر الـ HR في أكبر الشركات العالمية.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <button className="bg-white text-black px-10 py-4 rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-xl hover:bg-slate-100">
                احصل على سيرتك الآن
              </button>
              <button className="glass px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all border-white/10">
                استشارة مجانية
              </button>
            </div>

            <div className="flex items-center gap-6 justify-center md:justify-start pt-6 opacity-60">
              <div className="flex -space-x-3 rtl:space-x-reverse">
                <div className="w-8 h-8 rounded-full bg-purple-500 border-2 border-slate-900" />
                <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-slate-900" />
                <div className="w-8 h-8 rounded-full bg-pink-500 border-2 border-slate-900" />
              </div>
              <span className="text-xs font-bold">+500 مستخدم نجحوا معنا</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="border-y border-white/5 bg-white/2 py-12 relative z-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-8 md:gap-24 opacity-40">
            {['ATS-Optimized', 'AI-Powered', 'HR-Approved', 'Egyptian-Made'].map(label => (
              <div key={label} className="font-black uppercase tracking-[0.2em] text-[10px] md:text-xs">{label}</div>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 text-center">
            <div>
              <div className="text-4xl font-black gradient-text tracking-tighter">1.2K+</div>
              <div className="text-[10px] text-slate-500 mt-1 uppercase font-bold tracking-widest">سيرة ذاتية</div>
            </div>
            <div>
              <div className="text-4xl font-black gradient-text tracking-tighter">85%</div>
              <div className="text-[10px] text-slate-500 mt-1 uppercase font-bold tracking-widest">قبول مبدئي</div>
            </div>
            <div>
              <div className="text-4xl font-black gradient-text tracking-tighter">48H</div>
              <div className="text-[10px] text-slate-500 mt-1 uppercase font-bold tracking-widest">مدة التنفيذ</div>
            </div>
            <div>
              <div className="text-4xl font-black gradient-text tracking-tighter">4.9/5</div>
              <div className="text-[10px] text-slate-500 mt-1 uppercase font-bold tracking-widest">تقييم العملاء</div>
            </div>
          </div>
        </div>
      </div>

      {/* Problem Section */}
      <section id="features" className="py-24 container mx-auto px-6 relative z-20">
        <div className="max-w-4xl mx-auto text-center space-y-16">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-black">ليه الـ CV بتاعك بيترفض؟</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              أنظمة الـ ATS ترفض 3 من كل 4 سير ذاتية لأنها غير مهيأة للكلمات المفتاحية الصحيحة.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 text-right">
            <div className="glass p-10 rounded-[2.5rem] space-y-4 border-red-500/10 hover:border-red-500/30 transition-all">
              <div className="w-12 h-12 bg-red-500/10 rounded-2xl flex items-center justify-center text-2xl mb-4">❌</div>
              <h3 className="text-2xl font-bold text-red-400">الوضع الحالي</h3>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li className="flex items-center gap-2"><span>•</span> تنسيق قديم لا تقرأه الأنظمة</li>
                <li className="flex items-center gap-2"><span>•</span> غياب الكلمات المفتاحية الذكية</li>
                <li className="flex items-center gap-2"><span>•</span> وصف ممل للمهام بدون إنجازات</li>
              </ul>
            </div>
            <div className="glass p-10 rounded-[2.5rem] space-y-4 border-green-500/10 hover:border-green-500/30 transition-all">
              <div className="w-12 h-12 bg-green-500/10 rounded-2xl flex items-center justify-center text-2xl mb-4">✅</div>
              <h3 className="text-2xl font-bold text-green-400">مع CVEEEZ</h3>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li className="flex items-center gap-2"><span>•</span> هيكلة احترافية 100% ATS</li>
                <li className="flex items-center gap-2"><span>•</span> صياغة إنجازات بالأرقام والنتائج</li>
                <li className="flex items-center gap-2"><span>•</span> كلمات مفتاحية مخصصة لكل دور</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white/[0.01] relative z-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black mb-4">إزاي بنساعدك تنجح؟</h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto rounded-full" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {FEATURES.map((feature) => (
              <div key={feature.id} className="glass p-8 rounded-3xl hover:-translate-y-2 transition-all duration-300 border-white/5">
                <div className="text-5xl mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-32 container mx-auto px-6 relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4 tracking-tight">استثمر في مستقبلك</h2>
          <p className="text-slate-500">باقات مصممة لتناسب كل المستويات المهنية.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {PRICING_PLANS.map((plan) => (
            <div key={plan.id} className={`relative glass p-10 rounded-[3rem] transition-all duration-500 flex flex-col ${plan.isPopular ? 'border-purple-500 bg-purple-500/10 scale-105 z-10 shadow-3xl' : 'border-white/5 opacity-80 hover:opacity-100'}`}>
              {plan.isPopular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-white shadow-xl">الأكثر اختياراً</div>
              )}
              <div className="text-center mb-10">
                <h3 className="text-xl font-bold mb-4">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-4xl font-black">{plan.price}</span>
                  <span className="text-slate-500 text-sm font-bold">ج.م</span>
                </div>
              </div>
              <ul className="space-y-5 mb-10 flex-grow">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="text-purple-500 mt-1">✦</span>
                    <span className="text-slate-300 leading-tight">{f}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-5 rounded-2xl font-black text-lg transition-all ${plan.isPopular ? 'bg-white text-black hover:bg-slate-100 shadow-xl' : 'bg-white/5 hover:bg-white/10'}`}>
                اشترك الآن
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-32 container mx-auto px-6 max-w-4xl relative z-20">
        <h2 className="text-4xl font-black text-center mb-16">عندك سؤال؟</h2>
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <details key={item.id} className="group glass rounded-3xl overflow-hidden border-white/5 transition-all">
              <summary className="p-8 cursor-pointer font-bold list-none flex justify-between items-center group-open:bg-white/5 hover:bg-white/[0.02]">
                <span className="text-lg">{item.question}</span>
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-open:rotate-180 transition-transform">
                  <span className="text-purple-500">↓</span>
                </div>
              </summary>
              <div className="p-8 text-slate-400 text-base leading-relaxed border-t border-white/5 bg-black/40">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 bg-black/60 relative z-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="space-y-6">
              <div className="text-4xl font-black gradient-text tracking-tighter">CVEEEZ</div>
              <p className="text-slate-400 max-w-xs leading-relaxed text-sm">
                حولنا كتابة السيرة الذاتية لعملية علمية تضمن لك الوصول لمديري التوظيف في أكبر المؤسسات.
              </p>
              <div className="flex gap-4">
                {/* Social Placeholders */}
                {[1, 2, 3].map(i => <div key={i} className="w-10 h-10 rounded-xl glass hover:bg-white/10 transition-colors cursor-pointer" />)}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-20">
              <div className="space-y-6">
                <h4 className="font-bold text-white">الروابط</h4>
                <div className="flex flex-col gap-4 text-sm text-slate-500">
                  <a href="#" className="hover:text-purple-400">من نحن</a>
                  <a href="#" className="hover:text-purple-400">قصص النجاح</a>
                  <a href="#" className="hover:text-purple-400">المدونة</a>
                </div>
              </div>
              <div className="space-y-6">
                <h4 className="font-bold text-white">المساعدة</h4>
                <div className="flex flex-col gap-4 text-sm text-slate-500">
                  <a href="#" className="hover:text-purple-400">تواصل معنا</a>
                  <a href="#" className="hover:text-purple-400">سياسة الخصوصية</a>
                  <a href="#" className="hover:text-purple-400">الأسئلة الشائعة</a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 opacity-40">
            <div className="text-[10px] uppercase font-bold tracking-widest">جميع الحقوق محفوظة {new Date().getFullYear()} © CVEEEZ</div>
            <div className="text-[10px] font-sans italic">CVEEEZ: Elevating careers through intelligent design and strategy.</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
