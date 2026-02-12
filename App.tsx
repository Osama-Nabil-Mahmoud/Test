
import React, { useState, useEffect } from 'react';
import Scene3D from './components/Scene3D';
import { FEATURES, PRICING_PLANS, TESTIMONIALS, FAQ_ITEMS } from './constants';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen gradient-bg selection:bg-purple-500/30">
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
      <section className="relative min-h-screen flex items-center pt-20">
        <Scene3D />
        <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in text-center md:text-right">
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
      <div className="border-y border-white/5 bg-white/2 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-8 md:gap-24 opacity-60">
            <div className="flex items-center gap-3">
              <span className="text-2xl">✨</span>
              <span className="font-bold">ATS-friendly</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">⚡</span>
              <span className="font-bold">AI-assisted</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">👤</span>
              <span className="font-bold">Human-reviewed</span>
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

      {/* Problem → Solution */}
      <section id="features" className="py-24 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-16">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-black">ليه الـ CV بتاعك بيترفض؟</h2>
            <p className="text-xl text-slate-400">
              75% من السير الذاتية بيتم رفضها من "الروبوت" قبل ما يلمسها أي موظف HR. الـ CV التقليدي ما بيفهمش لغة الـ ATS.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 text-right">
            <div className="glass p-8 rounded-3xl space-y-4 border-red-500/20">
              <div className="text-3xl">❌</div>
              <h3 className="text-xl font-bold text-red-400">المشكلة</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>• كلمات مفتاحية مفقودة</li>
                <li>• إنجازات مش واضحة</li>
                <li>• تنسيق معقد يصعب قراءته</li>
                <li>• كلام كتير ملهوش لازمة</li>
              </ul>
            </div>
            <div className="glass p-8 rounded-3xl space-y-4 border-green-500/20">
              <div className="text-3xl">✅</div>
              <h3 className="text-xl font-bold text-green-400">الحل مع CVEEEZ</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>• تحسين الكلمات المفتاحية بذكاء</li>
                <li>• صياغة إنجازات قابلة للقياس</li>
                <li>• هيكلة واضحة ومباشرة</li>
                <li>• توافق تام مع كافة الأنظمة</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white/[0.01]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-black">مميزات تخليك في المقدمة</h2>
            <p className="text-slate-400">كل اللي محتاجه عشان تبني ملف مهني احترافي في مكان واحد.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {FEATURES.map((feature) => (
              <div key={feature.id} className="glass p-8 rounded-3xl hover:bg-white/5 transition-all group">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform inline-block">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-black mb-16">ازاي بنبدأ؟ (3 خطوات بسيطة)</h2>
        <div className="grid md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent -translate-y-1/2 z-0"></div>
          
          <div className="relative z-10 space-y-6">
            <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto text-2xl font-black shadow-lg shadow-purple-900/40">1</div>
            <h3 className="text-xl font-bold">ارفع بياناتك</h3>
            <p className="text-slate-400 text-sm px-4">ارفع الـ CV القديم أو املا بيانات خبراتك الأساسية في دقايق.</p>
          </div>
          
          <div className="relative z-10 space-y-6">
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto text-2xl font-black shadow-lg shadow-blue-900/40">2</div>
            <h3 className="text-xl font-bold">اختار هدفك</h3>
            <p className="text-slate-400 text-sm px-4">حدد الوظيفة اللي بتطمح ليها عشان نخصص الـ CV للكلمات اللي بتدور عليها.</p>
          </div>
          
          <div className="relative z-10 space-y-6">
            <div className="w-16 h-16 bg-pink-600 rounded-2xl flex items-center justify-center mx-auto text-2xl font-black shadow-lg shadow-pink-900/40">3</div>
            <h3 className="text-xl font-bold">استلم ونافس</h3>
            <p className="text-slate-400 text-sm px-4">استلم سيرتك الذاتية جاهزة، متراجعة، ومصممة للفوز بالوظيفة.</p>
          </div>
        </div>
        <button className="mt-16 bg-white text-black px-12 py-4 rounded-2xl font-black hover:scale-105 transition-all">ابدأ الآن - خطواتك أسهل مما تتخيل</button>
      </section>

      {/* Services */}
      <section id="services" className="py-24 glass">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-black">خدماتنا الشاملة</h2>
            <p className="text-slate-400">بنغطي كل جوانب رحلة بحثك عن وظيفة.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-900/40 p-8 rounded-3xl border border-white/5 space-y-6">
              <h3 className="text-xl font-bold">بناء CV بالذكاء الاصطناعي</h3>
              <p className="text-slate-400 text-sm">أداة سريعة وذكية لبناء مسودة أولية احترافية في ثواني.</p>
              <button className="text-purple-400 text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all">اعرف أكتر <span>←</span></button>
            </div>
            <div className="bg-slate-900/40 p-8 rounded-3xl border border-purple-500/20 space-y-6">
              <h3 className="text-xl font-bold">كتابة مهنية (مراجعة بشرية)</h3>
              <p className="text-slate-400 text-sm">خبراء HR بيكتبوا إنجازاتك بأسلوب احترافي يجذب الشركات الكبيرة.</p>
              <button className="text-purple-400 text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all">اعرف أكتر <span>←</span></button>
            </div>
            <div className="bg-slate-900/40 p-8 rounded-3xl border border-white/5 space-y-6">
              <h3 className="text-xl font-bold">خطاب التغطية (Cover Letter)</h3>
              <p className="text-slate-400 text-sm">خطاب مخصص لكل وظيفة بيحكي قصتك ليه إنت الشخص المناسب.</p>
              <button className="text-purple-400 text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all">اعرف أكتر <span>←</span></button>
            </div>
            <div className="bg-slate-900/40 p-8 rounded-3xl border border-white/5 space-y-6">
              <h3 className="text-xl font-bold">تنسيق Portfolio/Profile</h3>
              <p className="text-slate-400 text-sm">عرض أعمالك وسيرتك على LinkedIn بشكل يخلي الـ Recruiters يكلموك.</p>
              <button className="text-purple-400 text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all">اعرف أكتر <span>←</span></button>
            </div>
            <div className="bg-slate-900/40 p-8 rounded-3xl border border-white/5 space-y-6">
              <h3 className="text-xl font-bold">التحضير للمقابلات</h3>
              <p className="text-slate-400 text-sm">تدريبات حية على أسئلة المقابلات وكيفية الإجابة بثقة وإقناع.</p>
              <button className="text-purple-400 text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all">اعرف أكتر <span>←</span></button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-black">باقات تناسب الجميع</h2>
          <p className="text-slate-400">اختر الخطة اللي تسرع وصولك لوظيفتك القادمة.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {PRICING_PLANS.map((plan) => (
            <div key={plan.id} className={`relative glass p-10 rounded-[3rem] space-y-8 flex flex-col ${plan.isPopular ? 'border-purple-500 scale-105 shadow-2xl shadow-purple-900/20' : ''}`}>
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">الأكثر طلباً</div>
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
              <button className={`w-full py-4 rounded-2xl font-bold transition-all ${plan.isPopular ? 'bg-purple-600 hover:bg-purple-700' : 'bg-white/5 hover:bg-white/10'}`}>
                اشترك الآن
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white/[0.02]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-black">قالوا عننا</h2>
            <p className="text-slate-400">قصص نجاح بدأت من تحسين سيرة ذاتية.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="glass p-8 rounded-3xl space-y-6 italic">
                <p className="text-slate-300 leading-relaxed">"{t.quote}"</p>
                <div className="not-italic">
                  <div className="font-bold">{t.author}</div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-16">الأسئلة الشائعة</h2>
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <details key={item.id} className="group glass rounded-2xl overflow-hidden transition-all">
              <summary className="p-6 cursor-pointer font-bold list-none flex justify-between items-center group-open:bg-white/5">
                {item.question}
                <span className="transition-transform group-open:rotate-180">▼</span>
              </summary>
              <div className="p-6 text-slate-400 text-sm leading-relaxed border-t border-white/5">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 container mx-auto px-6">
        <div className="glass p-12 md:p-24 rounded-[4rem] text-center space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/20 blur-[100px] -z-10"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/20 blur-[100px] -z-10"></div>
          
          <h2 className="text-4xl md:text-6xl font-black">مستعد تبدأ صفحة جديدة <br />في حياتك المهنية؟</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">انضم لآلاف المحترفين اللي اختصروا الطريق لوظيفة أحلامهم مع CVEEEZ.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-12 py-5 rounded-2xl font-black text-xl shadow-xl transition-all hover:scale-105">
              ابدأ الآن مجاناً
            </button>
            <button className="glass border-white/10 px-12 py-5 rounded-2xl font-bold text-xl hover:bg-white/5 transition-all">
              تحدث مع خبير على WhatsApp
            </button>
          </div>
          <p className="text-xs text-slate-500">لا نضمن التوظيف، ولكن نضمن أفضل تمثيل لخبراتك أمام الأنظمة والمديرين.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-black/40">
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
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-slate-600 gap-4">
            <div>جميع الحقوق محفوظة © {new Date().getFullYear()} CVEEEZ</div>
            <div className="font-sans italic">CVEEEZ: Your Professional Bridge to Global Careers.</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
