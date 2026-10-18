
import Link from "next/link";

const features = [
  {
    number: "01",
    title: "معلمون متخصصون",
    description:
      "تعرّف على المعلمين واختر الأنسب لاحتياجاتك التعليمية.",
  },
  {
    number: "02",
    title: "تعلم يناسبك",
    description:
      "اختر المرحلة الدراسية والمواد التي تحتاج إلى دعم فيها.",
  },
  {
    number: "03",
    title: "متابعة تعليمية",
    description:
      "احصل على المساعدة في تنظيم احتياجاتك ومتابعة تقدمك.",
  },
];

export default function HomePage() {
  return (
    <main
      dir="rtl"
      className="min-h-screen bg-slate-50 text-slate-900"
    >
      {/* شريط التنقل */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-4">
          <Link
            href="/"
            className="text-2xl font-black text-violet-800"
          >
            مُعلّم
            <span className="text-emerald-600">.</span>
          </Link>

          <nav className="flex flex-wrap items-center gap-4 text-sm font-semibold text-slate-700 sm:gap-6">
            <Link href="/#home" className="hover:text-violet-700">
              الرئيسية
            </Link>
            <Link href="/#how" className="hover:text-violet-700">
              كيف تعمل المنصة؟
            </Link>
            <Link href="/teachers" className="hover:text-violet-700">
              المعلمون
            </Link>
            <Link
              href="/parent-request"
              className="hover:text-violet-700"
            >
              المستشار التعليمي
            </Link>
          </nav>

          <div className="flex flex-wrap items-center gap-2">
            <Link
              href="/login"
              className="rounded-xl border border-violet-200 px-4 py-2.5 font-bold text-violet-800 transition hover:bg-violet-50"
            >
              تسجيل الدخول
            </Link>
            <Link
              href="/register"
              className="rounded-xl bg-violet-700 px-4 py-2.5 font-bold text-white transition hover:bg-violet-800"
            >
              إنشاء حساب
            </Link>
          </div>
        </div>
      </header>

      {/* القسم الرئيسي */}
      <section id="home" className="overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:py-28">
          <div>
            <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-bold text-violet-800">
              تعلّم على مقاسك
            </span>

            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              رحلتك التعليمية
              <span className="block text-violet-700">
                تبدأ من هنا
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-9 text-slate-600">
              اكتشف المعلمين المناسبين لك، واختر المواد والمرحلة
              الدراسية التي تحتاج إليها، وابدأ رحلة تعلم تناسب
              أهدافك واحتياجاتك.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/teachers"
                className="rounded-2xl bg-violet-700 px-7 py-4 font-extrabold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-0.5 hover:bg-violet-800"
              >
                استكشف المعلمين
              </Link>

              <Link
                href="/parent-request"
                className="rounded-2xl border-2 border-violet-200 bg-white px-7 py-4 font-extrabold text-violet-800 transition hover:border-violet-400 hover:bg-violet-50"
              >
                تواصل مع مستشارك التعليمي
              </Link>
            </div>

            <p className="mt-5 text-sm leading-7 text-slate-500">
              هل تحتاج إلى مساعدة في تحديد احتياجاتك التعليمية؟
              أرسل طلبك إلى المستشار التعليمي.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-emerald-200/60 blur-2xl" />
            <div className="absolute -bottom-6 -left-6 h-40 w-40 rounded-full bg-violet-300/50 blur-2xl" />

            <div className="relative rounded-[2rem] border border-white bg-white p-6 shadow-2xl shadow-violet-100 sm:p-9">
              <div className="rounded-3xl bg-gradient-to-br from-violet-700 to-indigo-900 p-8 text-white sm:p-10">
                <div className="text-5xl">📚</div>
                <h2 className="mt-7 text-3xl font-black leading-relaxed">
                  كل طالب يستحق
                  <br />
                  تجربة تعلم أفضل
                </h2>
                <p className="mt-4 leading-8 text-violet-100">
                  تعلّم، تطوّر، وحقق أهدافك خطوة بخطوة مع
                  مُعلّم.
                </p>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3">
                <div className="rounded-2xl bg-violet-50 p-4 text-center">
                  <div className="text-2xl">🎯</div>
                  <p className="mt-2 text-xs font-bold text-violet-900">
                    أهداف واضحة
                  </p>
                </div>
                <div className="rounded-2xl bg-emerald-50 p-4 text-center">
                  <div className="text-2xl">📖</div>
                  <p className="mt-2 text-xs font-bold text-emerald-900">
                    تعلم مستمر
                  </p>
                </div>
                <div className="rounded-2xl bg-amber-50 p-4 text-center">
                  <div className="text-2xl">🌟</div>
                  <p className="mt-2 text-xs font-bold text-amber-900">
                    تقدم أفضل
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* كيف تعمل المنصة؟ */}
      <section id="how" className="border-y border-slate-200 bg-white py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-bold text-violet-700">
              خطوات بسيطة
            </span>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              كيف تساعدك مُعلّم؟
            </h2>
            <p className="mt-4 leading-8 text-slate-600">
              ابدأ بتحديد احتياجاتك، ثم استكشف الخيارات المتاحة
              لك على المنصة.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.number}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:border-violet-200 hover:shadow-lg"
              >
                <span className="text-sm font-black text-violet-600">
                  {feature.number}
                </span>
                <h3 className="mt-4 text-xl font-extrabold">
                  {feature.title}
                </h3>
                <p className="mt-3 leading-8 text-slate-600">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* قسم المستشار التعليمي */}
      <section className="bg-violet-50 py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 px-5 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-black leading-relaxed">
              هل تبحث عن المسار التعليمي المناسب؟
            </h2>
            <p className="mt-3 leading-8 text-slate-600">
              أخبرنا ببلدك والمرحلة الدراسية والمواد المطلوبة،
              وسجّل طلبك للتواصل مع المستشار التعليمي.
            </p>
          </div>

          <Link
            href="/parent-request"
            className="shrink-0 rounded-2xl bg-violet-700 px-7 py-4 font-extrabold text-white shadow-lg shadow-violet-200 transition hover:bg-violet-800"
          >
            تواصل مع مستشارك التعليمي
          </Link>
        </div>
      </section>

      {/* تذييل الصفحة */}
      <footer className="bg-slate-950 py-8 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 text-center sm:flex-row sm:text-right">
          <Link href="/" className="text-xl font-black">
            مُعلّم.
          </Link>

          <p className="text-sm leading-7 text-slate-400">
            منصة تعليمية تساعد الطلاب على الوصول إلى تجربة تعلم
            تناسب احتياجاتهم.
          </p>

          <Link
            href="/parent-request"
            className="text-sm font-bold text-violet-300 hover:text-white"
          >
            تواصل مع المستشار التعليمي
          </Link>
        </div>
      </footer>
    </main>
  );
}
