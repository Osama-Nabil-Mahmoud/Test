
import React, { useState, useEffect, Suspense } from 'react';
import Scene3D from './components/Scene3D.tsx';
import { FEATURES, PRICING_PLANS, TESTIMONIALS, FAQ_ITEMS } from './constants.tsx';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#030712] text-slate-200 selection:bg-purple-500/30">
      {/* Header */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-3xl font-black gradient-text tracking-tighter">CVEEEZ</div>
          <div className="hidden md:flex gap-8 text-sm font-semibold">
            <a href="#features" className="hover:text-purple-400 transition-colors">المميزات</a>
            <a href="#services" className="hover:text-purple-400 transition-colors">الخدمات</a>
            <a href="#pricing" className="hover:text-purple-400 transition-colors">الأسعار</a>
            <a href="#faq" className="hover:text-purple-400 transition-colors">الأسئلة</a>
          </div>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105">
            ابدأ الآن
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <Suspense fallback={<div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-blue-900/10" />}>
          {!hasError && <Scene3D onError={() => setHasError(true)} />}
        </Suspense>
        
        <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center md:text-right">
            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              سيرتك الذاتية هي <br />
              <span className="gradient-text">بوابتك للوظيفة</span> <br />
              اللي تحلم بيها
            </h1>
            <p className="text-xl text-slate-400 max-w-lg mx-auto md:mr-0">
              مع CVEEEZ، بنحول خبراتك لقصة نجاح بتعدي من أنظمة الـ ATS وتلفت نظر الـ HR في أكبر الشركات العالمية.
            </p>
            <div className="flex flex-col gap-4 text-sm font-medium">
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></span>
                <span>متوافق 100% مع أنظمة الـ ATS</span>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span>
                <span>صياغة احترافية لإنجازاتك الحقيقية</span>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <span className="w-2 h-2 rounded-full bg-pink-500 shadow-[0_0_10px_rgba(236,72,153,0.5)]"></span>
                <span>تصاميم عصرية تناسب الشركات العالمية</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <button className="bg-white text-black px-10 py-4 rounded-2xl font-black text-lg hover:bg-slate-200 transition-all shadow-xl">
                احصل على سيرتك الآن
              </button>
              <button className="glass px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all">
                استشارة مجانية
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="border-y border-white/5 bg-white/2 py-12 relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-8 md:gap-24 opacity-60">
            <div className="flex items-center gap-3">
              <span className="text-2xl">✨</span>
              <span className="font-bold uppercase tracking-wider text-xs">ATS-friendly</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">⚡</span>
              <span className="font-bold uppercase tracking-wider text-xs">AI-assisted</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">👤</span>
              <span className="font-bold uppercase tracking-wider text-xs">Human-reviewed</span>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 text-center">
            <div>
              <div className="text-4xl font-black gradient-text">+[عدد]</div>
              <div className="text-sm text-slate-500 mt-1">سيرة ذاتية مكتملة</div>
            </div>
            <div>
              <div className="text-4xl font-black gradient-text">[نسبة]%</div>
              <div className="text-sm text-slate-500 mt-1">زيادة في فرص المقابلات</div>
            </div>
            <div>
              <div className="text-4xl font-black gradient-text">[مدة]</div>
              <div className="text-sm text-slate-500 mt-1">متوسط وقت التسليم</div>
            </div>
            <div>
              <div className="text-4xl font-black gradient-text">24/7</div>
              <div className="text-sm text-slate-500 mt-1">دعم فني مستمر</div>
            </div>
          </div>
        </div>
      </div>

      {/* Problem Section */}
      <section id="features" className="py-24 container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-16">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-black">ليه الـ CV بتاعك بيترفض؟</h2>
            <p className="text-xl text-slate-400">
              75% من السير الذاتية بيتم رفضها من "الروبوت" قبل ما يلمسها أي موظف HR. الـ CV التقليدي ما بيفهمش لغة الـ ATS.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 text-right">
            <div className="glass p-8 rounded-3xl space-y-4 border-red-500/10">
              <div className="text-3xl">❌</div>
              <h3 className="text-xl font-bold text-red-400">المشكلة</h3>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li>• كلمات مفتاحية مفقودة تماماً</li>
                <li>• إنجازات مش واضحة أو غير قابلة للقياس</li>
                <li>• تنسيق معقد يصعب على البرامج قراءته</li>
                <li>• حشو كلام كتير ملوش علاقة بالوظيفة</li>
              </ul>
            </div>
            <div className="glass p-8 rounded-3xl space-y-4 border-green-500/10">
              <div className="text-3xl">✅</div>
              <h3 className="text-xl font-bold text-green-400">الحل مع CVEEEZ</h3>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li>• تحسين الكلمات المفتاحية بذكاء بناءً على الوصف</li>
                <li>• صياغة إنجازات قوية باستخدام معادلة XYZ</li>
                <li>• هيكلة واضحة ومباشرة تلفت نظر الـ HR</li>
                <li>• توافق تام مع كافة الأنظمة العالمية</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white/[0.01] relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-black">مميزات تخليك في المقدمة</h2>
            <p className="text-slate-400">كل اللي محتاجه عشان تبني ملف مهني احترافي في مكان واحد.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {FEATURES.map((feature) => (
              <div key={feature.id} className="glass p-8 rounded-3xl hover:bg-white/5 transition-all group border-white/5">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform inline-block">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 relative z-10 border-y border-white/5 bg-gradient-to-b from-transparent to-purple-900/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-black">خدماتنا الشاملة</h2>
            <p className="text-slate-400">بنغطي كل جوانب رحلة بحثك عن وظيفة.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass p-8 rounded-3xl space-y-6">
              <h3 className="text-xl font-bold">بناء CV بالذكاء الاصطناعي</h3>
              <p className="text-slate-400 text-sm leading-relaxed">أداة سريعة وذكية لبناء مسودة أولية احترافية في ثواني بناءً على خبراتك.</p>
              <button className="text-purple-400 text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all">اعرف أكتر <span>←</span></button>
            </div>
            <div className="glass p-8 rounded-3xl border-purple-500/20 bg-purple-500/5 space-y-6">
              <h3 className="text-xl font-bold">كتابة مهنية (مراجعة بشرية)</h3>
              <p className="text-slate-400 text-sm leading-relaxed">خبراء HR بيكتبوا إنجازاتك بأسلوب احترافي يجذب الشركات الكبيرة والناشئة.</p>
              <button className="text-purple-400 text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all">اعرف أكتر <span>←</span></button>
            </div>
            <div className="glass p-8 rounded-3xl space-y-6">
              <h3 className="text-xl font-bold">خطاب التغطية (Cover Letter)</h3>
              <p className="text-slate-400 text-sm leading-relaxed">خطاب مخصص لكل وظيفة بيحكي قصتك ليه إنت الشخص المناسب بالتحديد.</p>
              <button className="text-purple-400 text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all">اعرف أكتر <span>←</span></button>
            </div>
            <div className="glass p-8 rounded-3xl space-y-6">
              <h3 className="text-xl font-bold">تنسيق Portfolio/Profile</h3>
              <p className="text-slate-400 text-sm leading-relaxed">عرض أعمالك وسيرتك على LinkedIn بشكل يخلي الـ Recruiters يكلموك أولاً.</p>
              <button className="text-purple-400 text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all">اعرف أكتر <span>←</span></button>
            </div>
            <div className="glass p-8 rounded-3xl space-y-6">
              <h3 className="text-xl font-bold">التحضير للمقابلات</h3>
              <p className="text-slate-400 text-sm leading-relaxed">تدريبات حية على أسئلة المقابلات وكيفية الإجابة بثقة وإقناع تام بالذات.</p>
              <button className="text-purple-400 text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all">اعرف أكتر <span>←</span></button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-black">باقات تناسب الجميع</h2>
          <p className="text-slate-400">اختر الخطة اللي تسرع وصولك لوظيفتك القادمة.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {PRICING_PLANS.map((plan) => (
            <div key={plan.id} className={`relative glass p-10 rounded-[2.5rem] space-y-8 flex flex-col ${plan.isPopular ? 'border-purple-500 bg-purple-500/5 scale-105 shadow-2xl shadow-purple-900/20' : 'border-white/5'}`}>
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-white">الأكثر طلباً</div>
              )}
              <div className="text-center space-y-2">
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <div className="text-4xl font-black">{plan.price} <span className="text-sm text-slate-500 font-normal">ج.م</span></div>
              </div>
              <ul className="space-y-4 text-sm flex-grow">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="text-green-500">✔</span>
                    <span className="text-slate-300">{f}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-2xl font-bold transition-all ${plan.isPopular ? 'bg-purple-600 hover:bg-purple-700 text-white' : 'bg-white/5 hover:bg-white/10'}`}>
                اشترك الآن
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 container mx-auto px-6 max-w-4xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-16">الأسئلة الشائعة</h2>
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <details key={item.id} className="group glass rounded-2xl overflow-hidden transition-all border-white/5">
              <summary className="p-6 cursor-pointer font-bold list-none flex justify-between items-center group-open:bg-white/5">
                {item.question}
                <span className="transition-transform group-open:rotate-180 text-purple-500">▼</span>
              </summary>
              <div className="p-6 text-slate-400 text-sm leading-relaxed border-t border-white/5 bg-black/20">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-black/40 relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div className="space-y-4 text-center md:text-right">
              <div className="text-2xl font-black gradient-text">CVEEEZ</div>
              <p className="text-sm text-slate-400 max-w-xs leading-relaxed">
                CVEEEZ هي منصتك المتكاملة لتحسين وتطوير ملفاتك المهنية لتناسب السوق العالمي والذكاء الاصطناعي.
              </p>
            </div>
            <div className="flex gap-12 text-sm font-bold">
              <div className="flex flex-col gap-3">
                <a href="#" className="hover:text-purple-400 transition-colors">عن الشركة</a>
                <a href="#" className="hover:text-purple-400 transition-colors">سياسة الخصوصية</a>
                <a href="#" className="hover:text-purple-400 transition-colors">الشروط والأحكام</a>
              </div>
              <div className="flex flex-col gap-3">
                <a href="#" className="hover:text-purple-400 transition-colors">تواصل معنا</a>
                <a href="#" className="hover:text-purple-400 transition-colors">المدونة</a>
                <a href="#" className="hover:text-purple-400 transition-colors">الأسعار</a>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-[10px] text-slate-600 gap-4">
            <div>جميع الحقوق محفوظة © {new Date().getFullYear()} CVEEEZ</div>
            <div className="font-sans italic opacity-50">CVEEEZ: Your Professional Bridge to Global Careers.</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
