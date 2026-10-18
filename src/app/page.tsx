
"use client";

import Link from "next/link";

const subjects = [
  { icon: "ع", name: "اللغة العربية", desc: "قراءة ونحو وتعبير", value: "arabic", color: "peach" },
  { icon: "EN", name: "اللغة الإنجليزية", desc: "لغة ومحادثة وقواعد", value: "english", color: "blue" },
  { icon: "∑", name: "الرياضيات", desc: "فهم المسائل والتدريب", value: "math", color: "purple" },
  { icon: "⚗", name: "العلوم", desc: "اكتشف وافهم العالم", value: "science", color: "green" },
  { icon: "◈", name: "الدراسات الاجتماعية", desc: "تاريخ وجغرافيا", value: "social-studies", color: "yellow" },
  { icon: "⌘", name: "البرمجة", desc: "مهارات المستقبل الرقمية", value: "programming", color: "pink" },
  { icon: "۞", name: "القرآن الكريم", desc: "حفظ وتلاوة وتجويد", value: "quran", color: "mint" },
];

const steps = [
  { number: "01", icon: "⌕", title: "ابحث عن معلمك", desc: "اختر المادة والمرحلة الدراسية التي تناسب احتياجك." },
  { number: "02", icon: "▤", title: "قارن واختَر", desc: "راجع ملف المعلم وتخصصه وسعره قبل اتخاذ القرار." },
  { number: "03", icon: "✓", title: "ابدأ رحلتك", desc: "استخدم حسابك لمتابعة حجوزاتك وخدماتك المتاحة." },
];

export default function HomePage() {
  return (
    <main dir="rtl" className="home-page">
      <header className="home-header">
        <div className="home-container header-inner">
          <Link href="/" className="home-brand" aria-label="مُعلّم - الصفحة الرئيسية">
            <span className="brand-symbol">م</span>
            <span className="brand-copy">
              <strong>مُعلّم</strong>
              <small>تعلّم على مقاسك</small>
            </span>
          </Link>

          <nav className="home-nav" aria-label="القائمة الرئيسية">
            <Link href="/teachers">اكتشف المعلمين</Link>
            <a href="#subjects">المواد الدراسية</a>
            <a href="#how">كيف تعمل المنصة؟</a>
            <Link href="/parent-request">المستشار التعليمي</Link>
          </nav>

          <div className="header-ctas">
            <Link href="/login" className="login-cta">تسجيل الدخول</Link>
            <Link href="/register" className="primary-cta">
              ابدأ الآن <span>←</span>
            </Link>
          </div>
        </div>
      </header>

      <section className="home-hero" id="home">
        <div className="hero-decoration hero-decoration-one" aria-hidden="true" />
        <div className="hero-decoration hero-decoration-two" aria-hidden="true" />

        <div className="home-container hero-layout">
          <div className="hero-content">
            <div className="hero-kicker">
              <span className="kicker-dot" />
              طريقك إلى تعلّم أفضل يبدأ هنا
            </div>

            <h1>
              كل طالب له طريقته.
              <br />
              <span>اعثر على معلمك المناسب.</span>
            </h1>

            <p className="hero-lead">
              اكتشف معلمين في تخصصات مختلفة، وقارن بين ملفاتهم
              واختر ما يناسب مرحلتك واحتياجاتك التعليمية.
            </p>

            <div className="hero-actions">
              <Link href="/teachers" className="hero-primary">
                اكتشف المعلمين <span>←</span>
              </Link>
              <Link href="/parent-request" className="hero-secondary">
                تواصل مع المستشار التعليمي <span>←</span>
              </Link>
              <a href="#how" className="hero-secondary">
                كيف تعمل المنصة؟ <span>⌄</span>
              </a>
            </div>

            <div className="hero-benefits">
              <span><b>✓</b> تخصصات متنوعة</span>
              <span><b>✓</b> اختر وفق احتياجك</span>
              <span><b>✓</b> تعلّم أونلاين</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="رحلتك التعليمية تبدأ من هنا">
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />

            <div className="visual-sticker sticker-star">✳</div>
            <div className="visual-sticker sticker-spark">✦</div>

            <div className="learning-board">
              <div className="board-top">
                <div>
                  <span className="board-eyebrow">مساحتك التعليمية</span>
                  <h2>تعلّم بثقة 🌱</h2>
                </div>
                <div className="board-logo">م</div>
              </div>

              <div className="board-illustration">
                <div className="illustration-sun" />
                <div className="illustration-book book-back" />
                <div className="illustration-book book-front">
                  <span>مُعلّم</span>
                  <i>✦</i>
                </div>
                <div className="illustration-pencil">✎</div>
                <div className="illustration-star">✳</div>
              </div>

              <div className="board-bottom">
                <span className="board-check">✓</span>
                <div>
                  <strong>خطوتك الأولى تبدأ الآن</strong>
                  <small>ابحث، قارن، ثم اختر</small>
                </div>
                <span className="board-arrow">↙</span>
              </div>
            </div>

            <div className="floating-card floating-subject">
              <span className="floating-icon floating-purple">∑</span>
              <span>
                <strong>مواد متنوعة</strong>
                <small>تعلّم ما تحب</small>
              </span>
            </div>

            <div className="floating-card floating-learning">
              <span className="floating-icon floating-green">✓</span>
              <span>
                <strong>اختيارك بوضوح</strong>
                <small>قارن قبل الحجز</small>
              </span>
            </div>
          </div>
        </div>

        <div className="home-container search-wrap">
          <form className="teacher-search" action="/teachers" method="get">
            <div className="search-intro">
              <span className="search-symbol">⌕</span>
              <span>
                <strong>ابحث عن معلمك</strong>
                <small>ابدأ بالمادة والمرحلة الدراسية</small>
              </span>
            </div>

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
              ابحث الآن <span>←</span>
            </button>
          </form>
        </div>
      </section>

      <section className="subject-section" id="subjects">
        <div className="home-container">
          <div className="section-head">
            <div>
              <span className="section-eyebrow"><i /> اكتشف عالم المعرفة</span>
              <h2>ماذا تريد أن <span>تتعلّم اليوم؟</span></h2>
              <p>اختر مادتك المفضلة، وابدأ في استكشاف المعلمين المتخصصين.</p>
            </div>
            <Link className="text-link" href="/teachers">
              كل المعلمين <span>←</span>
            </Link>
          </div>

          <div className="subject-grid">
            {subjects.map((subject) => (
              <Link
                className="subject-card"
                href={`/teachers?subject=${subject.value}`}
                key={subject.value}
              >
                <span className={`subject-icon ${subject.color}`}>{subject.icon}</span>
                <span className="subject-name">{subject.name}</span>
                <span className="subject-desc">{subject.desc}</span>
                <span className="subject-card-bottom">
                  <span>اكتشف المعلمين</span>
                  <b>↙</b>
                </span>
              </Link>
            ))}
          </div>

          <div className="subjects-note">
            <span>💡</span>
            <p>لم تحدد المادة بعد؟ تصفّح المعلمين واكتشف الخيارات المتاحة لك.</p>
            <Link href="/teachers">تصفّح الكل ←</Link>
          </div>
        </div>
      </section>

      <section className="how-section" id="how">
        <div className="home-container">
          <div className="centered-head">
            <span className="section-eyebrow"><i /> رحلة سهلة من البداية</span>
            <h2>التعلّم المناسب يبدأ <span>بخطوة بسيطة</span></h2>
            <p>ثلاث خطوات تساعدك على الوصول إلى اختيارك.</p>
          </div>

          <div className="steps-grid">
            {steps.map((step) => (
              <article className="step-card" key={step.number}>
                <div className="step-card-top">
                  <span className="step-icon">{step.icon}</span>
                  <span className="step-number">{step.number}</span>
                </div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="join-section">
        <div className="home-container">
          <div className="join-panel">
            <div className="join-decoration" aria-hidden="true">✳</div>
            <div className="join-content">
              <span className="join-eyebrow">للمعلمين والمعلمات</span>
              <h2>علّم ما تحب، وشارك خبرتك مع الآخرين.</h2>
              <p>
                أنشئ حسابك التعليمي، وقدّم خبراتك وتخصصاتك للطلاب
                الباحثين عن معلم مناسب.
              </p>
              <Link href="/register?role=teacher" className="join-cta">
                انضم إلى مُعلّم <span>←</span>
              </Link>
            </div>
            <div className="join-art" aria-hidden="true">
              <div className="join-art-circle"><span>م</span></div>
              <span className="join-art-star">✦</span>
              <span className="join-art-dot" />
            </div>
          </div>
        </div>
      </section>

      <section className="consultant-section">
        <div className="home-container">
          <div className="consultant-panel">
            <div className="consultant-icon" aria-hidden="true">✦</div>
            <div className="consultant-content">
              <span className="section-eyebrow">نحن هنا لمساعدتك</span>
              <h2>هل تحتاج إلى مساعدة في اختيار المسار التعليمي؟</h2>
              <p>
                أخبرنا ببلدك والمرحلة الدراسية والمواد التي تحتاج إليها،
                وأرسل طلبك عبر نموذج المستشار التعليمي.
              </p>
            </div>
            <Link href="/parent-request" className="consultant-cta">
              تواصل مع المستشار التعليمي <span>←</span>
            </Link>
          </div>
        </div>
      </section>

      <footer className="home-footer">
        <div className="home-container">
          <div className="footer-main">
            <div className="footer-about">
              <Link href="/" className="home-brand footer-brand">
                <span className="brand-symbol">م</span>
                <span className="brand-copy">
                  <strong>مُعلّم</strong>
                  <small>تعلّم على مقاسك</small>
                </span>
              </Link>
              <p>
                مساحة تجمع الطلاب والمعلمين لتجربة تعليمية أكثر وضوحًا ومرونة.
              </p>
            </div>

            <div className="footer-column">
              <strong>استكشف</strong>
              <Link href="/teachers">المعلمون</Link>
              <a href="#subjects">المواد الدراسية</a>
              <a href="#how">كيف تعمل المنصة؟</a>
              <Link href="/parent-request">المستشار التعليمي</Link>
            </div>

            <div className="footer-column">
              <strong>حسابك</strong>
              <Link href="/login">تسجيل الدخول</Link>
              <Link href="/register">إنشاء حساب</Link>
              <Link href="/register?role=teacher">انضم كمعلم</Link>
              <Link href="/parent-request">تواصل معنا</Link>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} مُعلّم. جميع الحقوق محفوظة.</span>
            <span>تعلّم على مقاسك، خطوة بخطوة <b>♥</b></span>
          </div>
        </div>
      </footer>
    </main>
  );
}
