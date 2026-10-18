
"use client";

import Link from "next/link";

const subjects = [
  { icon: "ع", name: "اللغة العربية", value: "arabic" },
  { icon: "EN", name: "اللغة الإنجليزية", value: "english" },
  { icon: "∑", name: "الرياضيات", value: "math" },
  { icon: "⚗", name: "العلوم", value: "science" },
  { icon: "◈", name: "الدراسات الاجتماعية", value: "social-studies" },
  { icon: "⌘", name: "البرمجة", value: "programming" },
];

export default function HomePage() {
  return (
    <main dir="rtl" className="home-page">
      <header className="home-header">
        <div className="home-container header-inner">
          <Link href="/" className="home-brand">
            <span className="brand-symbol">م</span>
            <span>
              مُعلّم
              <small>تعلّم على مقاسك</small>
            </span>
          </Link>

          <nav className="home-nav">
            <Link href="/teachers">المعلمون</Link>
            <a href="#subjects">المواد الدراسية</a>
            <a href="#how">كيف تعمل المنصة؟</a>
          </nav>

          <div className="header-ctas">
            <Link href="/login" className="login-cta">
              تسجيل الدخول
            </Link>
            <Link href="/register" className="primary-cta">
              إنشاء حساب
            </Link>
          </div>
        </div>
      </header>

      <section className="home-hero">
        <div className="home-container hero-layout">
          <div className="hero-content">
            <span className="hero-kicker">
              منصة تعليمية للطلاب وأولياء الأمور والمعلمين
            </span>

            <h1>
              المعلم المناسب،
              <br />
              <span>يصنع فرقًا في رحلتك.</span>
            </h1>

            <p className="hero-lead">
              ابحث عن معلم يناسب مرحلتك واحتياجك، وقارن بين
              التخصصات والأسعار في مكان واحد.
            </p>

            <form
              className="teacher-search"
              action="/teachers"
              method="get"
            >
              <label className="search-field">
                <span>المادة الدراسية</span>
                <select name="subject" defaultValue="">
                  <option value="">كل المواد</option>
                  <option value="arabic">اللغة العربية</option>
                  <option value="english">اللغة الإنجليزية</option>
                  <option value="math">الرياضيات</option>
                  <option value="science">العلوم</option>
                  <option value="social-studies">الدراسات الاجتماعية</option>
                  <option value="quran">القرآن الكريم والتجويد</option>
                  <option value="programming">البرمجة</option>
                </select>
              </label>

              <label className="search-field">
                <span>المرحلة الدراسية</span>
                <select name="stage" defaultValue="all">
                  <option value="all">كل المراحل</option>
                  <option value="kindergarten">رياض الأطفال</option>
                  <option value="primary">ابتدائي</option>
                  <option value="preparatory">إعدادي</option>
                  <option value="secondary">ثانوي</option>
                  <option value="university">جامعي</option>
                </select>
              </label>

              <button className="search-submit" type="submit">
                ابحث عن معلم ←
              </button>
            </form>

            <p className="hero-note">
              اختاري المعلم بعد مراجعة بياناته وتخصصه وسعره.
            </p>
          </div>

          <div className="hero-art" aria-hidden="true">
            <div className="art-circle circle-one" />
            <div className="art-circle circle-two" />

            <div className="art-panel">
              <div className="art-panel-top">
                <span>مساحتك التعليمية</span>
                <span className="art-status">● متاح للاستكشاف</span>
              </div>

              <div className="art-book">م</div>

              <div className="art-lines">
                <i />
                <i />
                <i />
              </div>

              <div className="art-bottom">
                <span className="art-check">✓</span>
                <div>
                  <b>ابدئي رحلة التعلّم</b>
                  <small>خطوة واضحة في كل مرة</small>
                </div>
              </div>
            </div>

            <div className="art-float float-top">
              <span className="float-icon">✦</span>
              <div>
                <b>تعلّم بتركيز</b>
                <small>وفق احتياجك</small>
              </div>
            </div>

            <div className="art-float float-bottom">
              <span className="float-icon green">✓</span>
              <div>
                <b>اختيار أوضح</b>
                <small>قارن قبل الحجز</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="subject-section" id="subjects">
        <div className="home-container">
          <div className="section-head">
            <div>
              <span className="section-eyebrow">ابدأ من المادة</span>
              <h2>ماذا تريد أن تتعلّم؟</h2>
              <p>اختر المادة واستكشف المعلمين المتخصصين فيها.</p>
            </div>

            <Link className="text-link" href="/teachers">
              عرض المعلمين ←
            </Link>
          </div>

          <div className="subject-grid">
            {subjects.map((subject) => (
              <Link
                className="subject-card"
                href={`/teachers?subject=${subject.value}`}
                key={subject.value}
              >
                <span className="subject-icon">{subject.icon}</span>
                <span className="subject-name">{subject.name}</span>
                <span className="subject-arrow">↙</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="how-section" id="how">
        <div className="home-container">
          <div className="centered-head">
            <span className="section-eyebrow">ببساطة ووضوح</span>
            <h2>ابدأ في ثلاث خطوات</h2>
            <p>طريقة سهلة للوصول إلى المعلم المناسب.</p>
          </div>

          <div className="steps-grid">
            <article className="step-card">
              <span className="step-number">01</span>
              <h3>حدّد احتياجك</h3>
              <p>اختر المرحلة الدراسية والمادة التي تريد دراستها.</p>
            </article>

            <article className="step-card">
              <span className="step-number">02</span>
              <h3>قارن بين المعلمين</h3>
              <p>راجع التخصص والخبرة والسعر قبل اتخاذ قرارك.</p>
            </article>

            <article className="step-card">
              <span className="step-number">03</span>
              <h3>تابع حسابك</h3>
              <p>ادخل إلى حسابك لمتابعة الخدمات المتاحة لك.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="join-section">
        <div className="home-container join-panel">
          <div>
            <span className="join-eyebrow">للمعلمين والمعلمات</span>
            <h2>خبرتك تستحق أن تصل إلى طلاب أكثر.</h2>
            <p>
              أنشئ حسابك وجهّز ملفك التعليمي لعرض تخصصاتك وخبراتك.
            </p>
          </div>

          <Link href="/register?role=teacher" className="join-cta">
            انضم إلى مُعلّم ←
          </Link>
        </div>
      </section>

      <footer className="home-footer">
        <div className="home-container footer-inner">
          <Link href="/" className="footer-brand">
            مُعلّم<span>.</span>
          </Link>

          <p>تعلّم على مقاسك، خطوة بخطوة.</p>

          <div className="footer-links">
            <Link href="/teachers">المعلمون</Link>
            <Link href="/login">تسجيل الدخول</Link>
            <Link href="/register">إنشاء حساب</Link>
          </div>

          <small>
            © {new Date().getFullYear()} مُعلّم. جميع الحقوق محفوظة.
          </small>
        </div>
      </footer>
    </main>
  );
}
