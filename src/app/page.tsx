
const features = [
  {
    icon: "🎯",
    title: "تعلّم على مقاسك",
    description: "خطة تعليمية تراعي مستواك واحتياجاتك وتساعدك على التقدم بثقة.",
  },
  {
    icon: "💻",
    title: "حصص فردية أونلاين",
    description: "تواصل مباشر واهتمام أكبر بأسئلتك واحتياجاتك التعليمية.",
  },
  {
    icon: "💰",
    title: "اختيارات تناسب ميزانيتك",
    description: "راجع سعر الحصة ومدتها قبل إرسال طلب الحجز.",
  },
  {
    icon: "🎓",
    title: "من الروضة إلى الجامعة",
    description: "خيارات تعليمية لمختلف المراحل والتخصصات.",
  },
];

const benefits = [
  {
    icon: "🛡️",
    title: "الضمان الذهبي",
    description:
      "راجع شروط الحجز والاسترداد المعلنة قبل الدفع. تفعيل الاسترداد الفعلي يتطلب إعداد نظام دفع معتمد.",
  },
  {
    icon: "📊",
    title: "تقارير دورية",
    description:
      "فكرة المنصة أن تساعد الأسرة على متابعة أداء الأبناء وتقاريرهم التعليمية.",
  },
  {
    icon: "📚",
    title: "جميع المواد والمراحل",
    description:
      "ابحث عن المادة والمرحلة المناسبتين لاحتياجات الطالب.",
  },
  {
    icon: "⭐",
    title: "معلمون مختارون بعناية",
    description:
      "تُراجع طلبات انضمام المعلمين قبل اعتماد ملفاتهم للعرض.",
  },
];

const spaces = [
  {
    icon: "🎒",
    title: "الطالب",
    description: "الحجوزات والدروس وخطوات التعلم.",
    link: "/student",
    action: "دخول مساحة الطالب",
  },
  {
    icon: "👨‍👩‍👧",
    title: "ولي الأمر",
    description: "متابعة الأبناء وطلبات الدروس.",
    link: "/parent",
    action: "دخول حساب ولي الأمر",
  },
  {
    icon: "👩‍🏫",
    title: "المعلم",
    description: "إدارة الملف والمواعيد وطلبات الحجز.",
    link: "/teacher",
    action: "مساحة المعلم",
  },
  {
    icon: "⚙️",
    title: "الإدارة",
    description: "إدارة المستخدمين ومراجعة طلبات الانضمام.",
    link: "/admin",
    action: "دخول الإدارة",
  },
];

const questions = [
  {
    question: "ما طريقة الدراسة في مُعلّم؟",
    answer:
      "اختر المادة والمرحلة، ثم استكشف ملفات المعلمين والأسعار والمواعيد المتاحة.",
  },
  {
    question: "كيف أتحقق من كفاءة المعلم؟",
    answer:
      "راجع بيانات الملف وحالة اعتماد المعلم قبل إرسال طلب الحجز.",
  },
  {
    question: "كيف يتم الحجز بعد اختيار المعلم؟",
    answer:
      "تُجهز المنصة لتقديم طلب حجز ومتابعة حالته بعد استكمال نظام الحسابات والحجوزات.",
  },
  {
    question: "كيف أدفع مقابل الدروس؟",
    answer:
      "الدفع الإلكتروني يحتاج إلى ربط بوابة دفع رسمية قبل إتاحة التحصيل.",
  },
  {
    question: "ماذا لو لم يناسبني المعلم؟",
    answer:
      "تُعلن سياسة التبديل والاسترداد بوضوح بعد تحديد شروطها وآلية تنفيذها.",
  },
  {
    question: "هل يمكنني مشاهدة تسجيل الحصة؟",
    answer:
      "يتوقف ذلك على خدمة الحصص المستخدمة وسياسة التسجيل والخصوصية.",
  },
  {
    question: "كيف أحضر الحصة عن بُعد؟",
    answer:
      "يمكن توفير رابط الحصة للطالب والمعلم بعد إعداد نظام الحجز والاجتماعات.",
  },
  {
    question: "هل توجد باقات شهرية؟",
    answer:
      "يمكن إضافة باقات شهرية بعد تحديد الأسعار وشروط الاشتراك والاسترداد.",
  },
];

export default function HomePage() {
  return (
    <main dir="rtl">
      <header className="site-header">
        <div className="container navbar">
          <a className="brand" href="#home">
            مُعلّم<span>.</span>
            <small>تعلّم على مقاسك</small>
          </a>

          <nav className="nav-links" aria-label="القائمة الرئيسية">
            <a href="#how">كيف تعمل</a>
            <a href="#teachers">المعلمون</a>
            <a href="#parents">لأولياء الأمور</a>
            <a href="#join">للمعلمين</a>
            <a href="#faq">الأسئلة الشائعة</a>
          </nav>

          <div className="header-actions">
            <a className="login-link" href="/login">
              تسجيل الدخول
            </a>
            <a className="button button-primary" href="/register">
              ابدأ مجانًا
            </a>
          </div>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">
              ✦ مدرسين خصوصيين
            </span>

            <h1>
              رحلتك نحو
              <br />
              <span>التفوق تبدأ من هنا!</span>
            </h1>

            <p className="hero-description">
              مع مُعلّم، اختَر المدرس المناسب، وتعلّم بالطريقة
              التي تناسبك، وحقّق أهدافك خطوة بخطوة.
            </p>

            <div className="hero-actions">
              <a className="button button-primary button-large" href="#search">
                ابحث عن معلم
              </a>
              <a className="button button-outline button-large" href="/register">
                سجّل الآن مجانًا
              </a>
            </div>

            <div className="hero-points">
              <span>✓ تجربة عربية</span>
              <span>✓ خيارات متنوعة</span>
              <span>✓ متابعة منظمة</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-glow" />
            <div className="visual-card">
              <div className="visual-top">
                <span>رحلة تعلمك</span>
                <span className="visual-status">ابدأ اليوم</span>
              </div>

              <div className="teacher-illustration" aria-hidden="true">
                <div className="sun-shape" />
                <div className="book-shape">📚</div>
                <div className="person-shape">
                  <div className="person-head" />
                  <div className="person-body" />
                </div>
              </div>

              <div className="visual-bottom">
                <div>
                  <strong>حصص فردية أونلاين</strong>
                  <span>تعلم خطوة بخطوة</span>
                </div>
                <span className="visual-check">✓</span>
              </div>
            </div>

            <div className="floating-note note-one">
              <span>🎯</span>
              <div>
                <strong>هدفك أقرب</strong>
                <small>خطوة في كل مرة</small>
              </div>
            </div>

            <div className="floating-note note-two">
              <span>📖</span>
              <div>
                <strong>تعلم بثقة</strong>
                <small>على مقاسك</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section" id="how">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">لماذا مُعلّم؟</span>
            <h2>تعلم خطوة بخطوة</h2>
            <p>كل حصة تقرّبك لهدفك.</p>
          </div>

          <div className="feature-grid">
            {features.map((feature) => (
              <article className="feature-card" key={feature.title}>
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="search-section" id="search">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">ابدأ البحث عن معلم</span>
            <h2>اختر ما يناسبك</h2>
            <p>حدد احتياجاتك، ويمكنك تعديل التصفية لاحقًا.</p>
          </div>

          <form className="search-panel" action="/teachers" method="get">
            <div className="field">
              <label htmlFor="stage">المرحلة</label>
              <select id="stage" name="stage" defaultValue="all">
                <option value="all">كل المراحل</option>
                <option value="kindergarten">الروضة</option>
                <option value="primary">ابتدائي</option>
                <option value="preparatory">إعدادي</option>
                <option value="secondary">ثانوي</option>
                <option value="university">جامعي</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="subject">المادة</label>
              <select id="subject" name="subject" defaultValue="">
                <option value="">اختر المادة</option>
                <option value="arabic">اللغة العربية</option>
                <option value="english">اللغة الإنجليزية</option>
                <option value="math">الرياضيات</option>
                <option value="science">العلوم</option>
                <option value="social-studies">الدراسات الاجتماعية</option>
                <option value="quran">القرآن الكريم والتجويد</option>
                <option value="programming">البرمجة</option>
                <option value="other">مواد أخرى</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="country">الدولة</label>
              <select id="country" name="country" defaultValue="EG">
                <option value="EG">مصر</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="lessonType">نوع الدرس</label>
              <select id="lessonType" name="lessonType" defaultValue="individual">
                <option value="individual">فردي مباشر</option>
                <option value="online">أونلاين</option>
                <option value="in-person">حضوري</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="price">السعر</label>
              <select id="price" name="price" defaultValue="all">
                <option value="all">كل الأسعار</option>
                <option value="under100">أقل من 100 جنيه</option>
                <option value="100-250">100–250 جنيه</option>
                <option value="250plus">أكثر من 250 جنيه</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="availability">التوفر</label>
              <select id="availability" name="availability" defaultValue="any">
                <option value="any">أي وقت</option>
                <option value="today">اليوم</option>
                <option value="week">هذا الأسبوع</option>
              </select>
            </div>

            <div className="search-submit">
              <button className="button button-primary button-large" type="submit">
                ابحث الآن <span aria-hidden="true">←</span>
              </button>
            </div>
          </form>

          <div className="trust-points">
            <span>✓ ملفات المعلمين قابلة للمراجعة</span>
            <span>✓ تفاصيل الحجز قبل الإرسال</span>
            <span>✓ تجربة عربية من البداية</span>
            <span>✓ متابعة للأسرة والطالب</span>
          </div>
        </div>
      </section>

      <section className="benefits-section" id="parents">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">للطلاب وأولياء الأمور</span>
            <h2>لماذا أدرس أبنائي في منصة مُعلّم؟</h2>
            <p>
              نساعدك على اختيار تجربة تعلم واضحة ومتابعة تقدم أبنائك بثقة.
            </p>
          </div>

          <div className="benefit-grid">
            {benefits.map((benefit) => (
              <article className="benefit-card" key={benefit.title}>
                <span className="benefit-icon">{benefit.icon}</span>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="teacher-section" id="teachers">
        <div className="container teacher-grid">
          <div className="teacher-copy">
            <span className="eyebrow">اختيار المعلم المناسب</span>
            <h2>
              ابدأ من احتياجك،
              <br />
              <span>ثم اختر بثقة.</span>
            </h2>
            <p>
              استكشف ملفات المعلمين المتاحة، وقارن التخصصات والمواعيد
              والتكلفة قبل إرسال طلبك.
            </p>
            <a className="button button-primary" href="/teachers">
              استكشف المعلمين
            </a>
          </div>

          <div className="comparison-list">
            <article>
              <span>📚</span>
              <div>
                <h3>حسب المادة والمرحلة</h3>
                <p>حدد ما تريد دراسته لتصل إلى الخيارات الأقرب لاحتياجك.</p>
              </div>
              <a href="/teachers" aria-label="عرض المعلمين حسب المادة">←</a>
            </article>

            <article>
              <span>🗓️</span>
              <div>
                <h3>حسب الموعد المناسب</h3>
                <p>راجع تفاصيل التوفر قبل إرسال طلب الحجز.</p>
              </div>
              <a href="/teachers" aria-label="عرض المعلمين حسب الموعد">←</a>
            </article>

            <article>
              <span>💵</span>
              <div>
                <h3>بتكلفة واضحة</h3>
                <p>راجع سعر الحصة ومدتها قبل اتخاذ قرارك.</p>
              </div>
              <a href="/teachers" aria-label="عرض المعلمين حسب التكلفة">←</a>
            </article>
          </div>
        </div>
      </section>

      <section className="learning-section">
        <div className="container learning-grid">
          <div className="learning-art" aria-hidden="true">
            <div className="learning-circle">
              <span>📘</span>
              <span>✏️</span>
              <span>🎓</span>
            </div>
          </div>

          <div>
            <span className="eyebrow">للطلاب وأولياء الأمور</span>
            <h2>تعلم أوضح.<br /><span>وطمأنينة أكبر.</span></h2>
            <p>
              ملف لكل طالب، ومتابعة للحصص القادمة والتقارير والواجبات،
              حتى تعرف الأسرة ما تم وما الخطوة التالية.
            </p>
            <a className="button button-primary" href="/register">
              ابنِ ملف تعلمك
            </a>
          </div>
        </div>
      </section>

      <section className="account-section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">مساحة تعلمك</span>
            <h2>كل ما تحتاجه في مكان واحد</h2>
            <p>الحصص والمواعيد وملف التعلم والتواصل والمتابعة.</p>
          </div>

          <div className="feature-grid three-columns">
            <article className="feature-card">
              <div className="feature-icon">🗓️</div>
              <h3>الحصص والمواعيد</h3>
              <p>تابع طلبات الحجز ومواعيد دروسك.</p>
            </article>
            <article className="feature-card">
              <div className="feature-icon">📂</div>
              <h3>ملف التعلم</h3>
              <p>احتفظ بأهدافك والمواد التي تتابعها.</p>
            </article>
            <article className="feature-card">
              <div className="feature-icon">💬</div>
              <h3>التواصل والمتابعة</h3>
              <p>تابع تفاصيل الطلب والخطوة التالية.</p>
            </article>
          </div>

          <div className="center-action">
            <a className="button button-primary" href="/login">افتح مساحة حسابك</a>
          </div>
        </div>
      </section>

      <section className="join-section" id="join">
        <div className="container join-grid">
          <div>
            <span className="eyebrow">للمعلمين</span>
            <h2>علّم بطريقتك،<br />ووسّع أثرك.</h2>
            <p>
              أنشئ ملفك، أضف المواد والمراحل التي تدرّسها، وحدد أوقاتك
              المناسبة. تخضع طلبات الانضمام للمراجعة قبل الظهور في المنصة.
            </p>
            <a className="button button-light" href="/register?role=teacher">
              قدّم كمعلم
            </a>
          </div>
          <div className="join-symbol" aria-hidden="true">✦</div>
        </div>
      </section>

      <section className="spaces-section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">مساحات المنصة</span>
            <h2>كل مستخدم له مساحة تناسب دوره.</h2>
            <p>
              تظهر أدوات الإدارة والبيانات المخصصة وفق صلاحيات الحساب بعد
              تنفيذ نظام تسجيل الدخول والتحقق من الأدوار.
            </p>
          </div>

          <div className="spaces-grid">
            {spaces.map((space) => (
              <article className="space-card" key={space.title}>
                <span className="space-icon">{space.icon}</span>
                <h3>{space.title}</h3>
                <p>{space.description}</p>
                <a href={space.link}>{space.action} ←</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">آراء أولياء الأمور</span>
            <h2>خطوات صغيرة، وثقة أكبر في رحلة التعلم.</h2>
            <p>
              نماذج تجريبية لتصميم القسم؛ يجب استبدالها بآراء حقيقية بإذن أصحابها.
            </p>
          </div>

          <div className="testimonial-grid">
            <article className="testimonial-card">
              <div className="stars" aria-label="تقييم توضيحي">★★★★★</div>
              <blockquote>
                «كنت أبحث عن طريقة أساعد بها ابني في تنظيم مذاكرته.
                وجود مواعيد واضحة يساعدنا على جعل وقت الدراسة أكثر انتظامًا.»
              </blockquote>
              <strong>أم يوسف</strong>
              <small>ولية أمر · نموذج توضيحي</small>
            </article>

            <article className="testimonial-card">
              <div className="stars" aria-label="تقييم توضيحي">★★★★★</div>
              <blockquote>
                «أحببت فكرة مراجعة تفاصيل المعلم وسعر الحصة قبل إرسال طلب الحجز،
                واختيار الموعد الذي يناسب جدول ابنتي.»
              </blockquote>
              <strong>أبو مريم</strong>
              <small>ولي أمر · نموذج توضيحي</small>
            </article>

            <article className="testimonial-card">
              <div className="stars" aria-label="تقييم توضيحي">★★★★★</div>
              <blockquote>
                «البحث حسب المرحلة والمادة يساعد الأسرة على تنظيم خيارات
                التعلم ومقارنة المعلمين المتاحين.»
              </blockquote>
              <strong>أم ليلى</strong>
              <small>ولية أمر · نموذج توضيحي</small>
            </article>
          </div>
        </div>
      </section>

      <section className="booking-section">
        <div className="container">
          <div className="booking-panel">
            <div>
              <span className="eyebrow">قبل إرسال طلب الحجز</span>
              <h2>تفاصيل واضحة قبل الحجز</h2>
              <p>
                راجع سعر الحصة ومدتها وشروط الحجز الظاهرة في ملف المعلم
                قبل إرسال الطلب.
              </p>
            </div>

            <div className="booking-points">
              <div><span>✓</span><p><strong>سعر ظاهر</strong><br />سعر الحصة ومدتها ضمن تفاصيل الملف.</p></div>
              <div><span>✓</span><p><strong>موعد يناسبك</strong><br />راجع المواعيد المتاحة قبل الطلب.</p></div>
              <div><span>✓</span><p><strong>بدون مفاجآت</strong><br />توضيح حالة الدفع وسياسة الاسترداد قبل التفعيل.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section" id="faq">
        <div className="container faq-container">
          <div className="section-heading">
            <span className="eyebrow">الأسئلة الشائعة</span>
            <h2>كل ما تحتاج معرفته</h2>
          </div>

          <div className="faq-list">
            {questions.map((item) => (
              <details className="faq-item" key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <a className="brand footer-brand" href="#home">
              مُعلّم<span>.</span>
              <small>تعلّم على مقاسك</small>
            </a>
            <p>اختر معلمك، وراجع تفاصيل الحجز، وابدأ رحلة تعلمك.</p>
            <span>منصة مُعلّم التعليمية · مصر · © ٢٠٢٦</span>
          </div>

          <div>
            <h3>اكتشف</h3>
            <a href="#teachers">المعلمون</a>
            <a href="#how">كيف تعمل</a>
            <a href="#faq">الأسئلة الشائعة</a>
          </div>

          <div>
            <h3>مجتمع مُعلّم</h3>
            <a href="/student">للطلاب</a>
            <a href="/parent">لأولياء الأمور</a>
            <a href="/register?role=teacher">للمعلمين</a>
          </div>

          <div>
            <h3>حسابك</h3>
            <a href="/login">تسجيل الدخول</a>
            <a href="/register">إنشاء حساب</a>
            <a href="mailto:contact@example.com">تواصل معنا</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
