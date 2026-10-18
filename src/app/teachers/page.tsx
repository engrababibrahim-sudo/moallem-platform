
"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { supabase } from "../../lib/supabase";

type Teacher = {
  id: string;
  display_name: string | null;
  country: string | null;
  bio: string | null;
  specialization: string | null;
  years_experience: number | null;
  subjects: string[] | string | null;
  education_stages: string[] | string | null;
  grades: string[] | string | null;
  teaching_format: string[] | string | null;
  hourly_rate: number | null;
  currency: string | null;
};

const subjectOptions = [
  { value: "", label: "كل المواد" },
  { value: "arabic", label: "اللغة العربية" },
  { value: "english", label: "اللغة الإنجليزية" },
  { value: "math", label: "الرياضيات" },
  { value: "science", label: "العلوم" },
  { value: "social-studies", label: "الدراسات الاجتماعية" },
  { value: "quran", label: "القرآن الكريم والتجويد" },
  { value: "programming", label: "البرمجة" },
];

const stageOptions = [
  { value: "", label: "كل المراحل" },
  { value: "kindergarten", label: "الروضة" },
  { value: "primary", label: "ابتدائي" },
  { value: "preparatory", label: "إعدادي" },
  { value: "secondary", label: "ثانوي" },
  { value: "university", label: "جامعي" },
];

function toList(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value
      .filter((item) => typeof item === "string")
      .map((item) => item.trim())
      .filter(Boolean);
  }

  if (typeof value === "string" && value.trim()) {
    return value
      .split(/[,،;]/)
      .map((item) => item.trim())
      .filter(Boolean);
  }

  return [];
}

function normalize(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFKC")
    .replace(/[أإآ]/g, "ا")
    .replace(/ى/g, "ي")
    .replace(/ة/g, "ه")
    .replace(/[\s_-]+/g, "");
}

const subjectAliases: Record<string, string[]> = {
  arabic: ["arabic", "اللغة العربية", "عربي", "العربي"],
  english: ["english", "اللغة الانجليزية", "انجليزي", "الانجليزي"],
  math: ["math", "mathematics", "رياضيات", "الرياضيات"],
  science: ["science", "علوم", "العلوم"],
  "social-studies": [
    "social studies",
    "social-studies",
    "دراسات",
    "الدراسات الاجتماعية",
  ],
  quran: ["quran", "قران", "القران الكريم", "تجويد"],
  programming: ["programming", "برمجة", "البرمجة", "كمبيوتر"],
};

const stageAliases: Record<string, string[]> = {
  kindergarten: ["kindergarten", "kg", "روضة", "رياض الاطفال"],
  primary: ["primary", "ابتدائي", "الابتدائي", "ابتدائية"],
  preparatory: ["preparatory", "middle", "اعدادي", "الاعدادي"],
  secondary: ["secondary", "high school", "ثانوي", "الثانوي"],
  university: ["university", "جامعي", "الجامعي", "جامعة"],
};

function includesAlias(
  values: string[],
  aliases: string[] | undefined
): boolean {
  if (!aliases) return true;

  const normalizedValues = values.map(normalize);
  return aliases.some((alias) => {
    const target = normalize(alias);
    return normalizedValues.some(
      (value) => value === target || value.includes(target)
    );
  });
}

function formatPrice(teacher: Teacher): string {
  if (teacher.hourly_rate == null) return "السعر عند التواصل";

  const currency = (teacher.currency || "EGP").toUpperCase();
  const currencyLabel =
    currency === "EGP"
      ? "جنيه"
      : currency === "SAR"
        ? "ريال سعودي"
        : currency;

  return `${teacher.hourly_rate.toLocaleString("ar-EG")} ${currencyLabel} / ساعة`;
}

export default function TeachersPage() {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [subject, setSubject] = useState("");
  const [stage, setStage] = useState("");
  const [price, setPrice] = useState("all");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    setSubject(params.get("subject") || "");
    setStage(params.get("stage") === "all" ? "" : params.get("stage") || "");
    setPrice(params.get("price") || "all");

    async function loadTeachers() {
      setLoading(true);
      setError("");

      const { data, error: queryError } = await supabase
        .from("public_teacher_directory")
        .select(
          "id, display_name, country, bio, specialization, years_experience, subjects, education_stages, grades, teaching_format, hourly_rate, currency"
        )
        .order("display_name", { ascending: true });

      if (queryError) {
        console.error("Load teachers error:", queryError);
        setError(
          "تعذر تحميل المعلمين. تأكدي من صلاحية قراءة جدول عرض المعلمين في Supabase."
        );
        setTeachers([]);
      } else {
        setTeachers((data || []) as Teacher[]);
      }

      setLoading(false);
    }

    void loadTeachers();
  }, []);

  const filteredTeachers = useMemo(() => {
    return teachers.filter((teacher) => {
      const subjects = toList(teacher.subjects);
      const stages = toList(teacher.education_stages);

      const searchableText = [
        teacher.display_name,
        teacher.bio,
        teacher.specialization,
        teacher.country,
        ...subjects,
        ...stages,
        ...toList(teacher.grades),
      ]
        .filter(Boolean)
        .join(" ");

      if (
        search.trim() &&
        !normalize(search)
          .split(/\s+/)
          .every((word) => normalize(searchableText).includes(word))
      ) {
        return false;
      }

      if (
        subject &&
        !includesAlias(subjects, subjectAliases[subject])
      ) {
        return false;
      }

      if (
        stage &&
        !includesAlias(stages, stageAliases[stage])
      ) {
        return false;
      }

      if (price !== "all" && teacher.hourly_rate != null) {
        const currency = (teacher.currency || "EGP").toUpperCase();

        if (currency !== "EGP") return false;

        if (price === "under100" && teacher.hourly_rate >= 100) {
          return false;
        }

        if (
          price === "100-250" &&
          (teacher.hourly_rate < 100 || teacher.hourly_rate > 250)
        ) {
          return false;
        }

        if (price === "250plus" && teacher.hourly_rate <= 250) {
          return false;
        }
      }

      return true;
    });
  }, [teachers, search, subject, stage, price]);

  return (
    <main dir="rtl" className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4">
          <Link href="/" className="text-2xl font-extrabold text-blue-800">
            مُعلّم<span className="text-teal-600">.</span>
          </Link>

          <nav className="flex flex-wrap items-center gap-4 text-sm">
            <Link href="/" className="text-slate-600 hover:text-blue-700">
              الرئيسية
            </Link>
            <Link href="/login" className="text-slate-600 hover:text-blue-700">
              تسجيل الدخول
            </Link>
            <Link
              href="/register"
              className="rounded-xl bg-blue-700 px-4 py-2 font-bold text-white hover:bg-blue-800"
            >
              إنشاء حساب
            </Link>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 py-10">
        <div className="mb-8">
          <p className="mb-2 font-bold text-teal-700">اختاري معلمك</p>
          <h1 className="mb-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            المعلمون المتاحون على مُعلّم
          </h1>
          <p className="max-w-2xl leading-8 text-slate-600">
            ابحثي حسب المادة والمرحلة والتخصص والسعر، ثم راجعي بيانات المعلم
            قبل اتخاذ قرار الحجز.
          </p>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <label htmlFor="teacher-search" className="mb-2 block font-bold">
              البحث
            </label>
            <input
              id="teacher-search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="اسم المعلم أو التخصص"
            />
          </div>

          <div>
            <label htmlFor="teacher-subject" className="mb-2 block font-bold">
              المادة
            </label>
            <select
              id="teacher-subject"
              value={subject}
              onChange={(event) => setSubject(event.target.value)}
            >
              {subjectOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="teacher-stage" className="mb-2 block font-bold">
              المرحلة التعليمية
            </label>
            <select
              id="teacher-stage"
              value={stage}
              onChange={(event) => setStage(event.target.value)}
            >
              {stageOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="teacher-price" className="mb-2 block font-bold">
              سعر الساعة
            </label>
            <select
              id="teacher-price"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
            >
              <option value="all">كل الأسعار</option>
              <option value="under100">أقل من 100 جنيه</option>
              <option value="100-250">من 100 إلى 250 جنيهًا</option>
              <option value="250plus">أكثر من 250 جنيهًا</option>
            </select>
          </div>
        </div>

        {loading ? (
          <div className="rounded-2xl bg-white p-12 text-center text-slate-600">
            جارٍ تحميل بيانات المعلمين...
          </div>
        ) : error ? (
          <div
            role="alert"
            className="rounded-2xl border border-red-200 bg-red-50 p-6 text-red-800"
          >
            <h2 className="mb-2 text-xl font-bold">تعذر عرض المعلمين</h2>
            <p>{error}</p>
            <p className="mt-3 text-sm">
              تفاصيل الخطأ التقنية تظهر في Console داخل أدوات المطور.
            </p>
          </div>
        ) : filteredTeachers.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center">
            <div className="mb-3 text-4xl">🔎</div>
            <h2 className="mb-2 text-xl font-bold text-slate-900">
              لا توجد نتائج مطابقة
            </h2>
            <p className="mb-5 text-slate-600">
              قد لا توجد ملفات منشورة بهذه المواصفات حاليًا.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setSubject("");
                setStage("");
                setPrice("all");
              }}
              className="rounded-xl bg-blue-700 px-5 py-3 font-bold text-white hover:bg-blue-800"
            >
              عرض كل المعلمين
            </button>
          </div>
        ) : (
          <>
            <div className="mb-5 flex items-center justify-between gap-3">
              <h2 className="text-xl font-bold text-slate-900">
                نتائج البحث
              </h2>
              <span className="text-sm text-slate-600">
                عدد النتائج: {filteredTeachers.length}
              </span>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
              {filteredTeachers.map((teacher) => {
                const subjects = toList(teacher.subjects);
                const stages = toList(teacher.education_stages);
                const grades = toList(teacher.grades);

                return (
                  <article
                    key={teacher.id}
                    className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="mb-4 flex items-center gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-2xl font-bold text-blue-800">
                        {(teacher.display_name || "م").trim().charAt(0)}
                      </div>

                      <div className="min-w-0">
                        <h3 className="truncate text-lg font-extrabold text-slate-900">
                          {teacher.display_name || "معلم مُعلّم"}
                        </h3>
                        <p className="mb-0 text-sm text-slate-500">
                          {teacher.specialization || "تخصص تعليمي"}
                        </p>
                      </div>
                    </div>

                    <div className="mb-4 flex flex-wrap gap-2">
                      {subjects.slice(0, 4).map((item) => (
                        <span
                          key={item}
                          className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-800"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <p className="mb-4 line-clamp-3 flex-1 leading-7 text-slate-600">
                      {teacher.bio || "لم يضف المعلم نبذة تعريفية بعد."}
                    </p>

                    <div className="space-y-2 border-t border-slate-100 pt-4 text-sm text-slate-600">
                      <p className="mb-0">
                        <strong className="text-slate-800">المراحل: </strong>
                        {stages.length ? stages.join("، ") : "غير محددة"}
                      </p>

                      {grades.length > 0 && (
                        <p className="mb-0">
                          <strong className="text-slate-800">الصفوف: </strong>
                          {grades.join("، ")}
                        </p>
                      )}

                      <p className="mb-0">
                        <strong className="text-slate-800">الخبرة: </strong>
                        {teacher.years_experience == null
                          ? "غير محددة"
                          : `${teacher.years_experience} سنة`}
                      </p>

                      <p className="mb-0">
                        <strong className="text-slate-800">الدولة: </strong>
                        {teacher.country || "غير محددة"}
                      </p>
                    </div>

                    <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                      <span className="font-extrabold text-teal-700">
                        {formatPrice(teacher)}
                      </span>
                      <Link
                        href="/login"
                        className="rounded-xl bg-blue-700 px-4 py-2 font-bold text-white hover:bg-blue-800"
                      >
                        تسجيل الدخول للحجز
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </>
        )}
      </section>

      <footer className="border-t border-slate-200 bg-white px-4 py-6 text-center text-sm text-slate-500">
        مُعلّم — تعلّم على مقاسك
        <div className="mt-2">
          <Link href="/" className="font-semibold text-blue-700">
            العودة إلى الرئيسية
          </Link>
        </div>
      </footer>
    </main>
  );
}
