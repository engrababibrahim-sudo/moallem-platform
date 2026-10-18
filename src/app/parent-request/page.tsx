
"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { supabase } from "../../lib/supabase";

const countries = [
  { name: "مصر", code: "+20" },
  { name: "السعودية", code: "+966" },
  { name: "الإمارات", code: "+971" },
  { name: "الكويت", code: "+965" },
  { name: "قطر", code: "+974" },
  { name: "البحرين", code: "+973" },
  { name: "عُمان", code: "+968" },
  { name: "الأردن", code: "+962" },
  { name: "المغرب", code: "+212" },
  { name: "الجزائر", code: "+213" },
  { name: "تونس", code: "+216" },
  { name: "العراق", code: "+964" },
  { name: "تركيا", code: "+90" },
  { name: "الولايات المتحدة", code: "+1" },
  { name: "المملكة المتحدة", code: "+44" },
  { name: "كندا", code: "+1" },
  { name: "أستراليا", code: "+61" },
  { name: "ألمانيا", code: "+49" },
  { name: "فرنسا", code: "+33" },
  { name: "إيطاليا", code: "+39" },
  { name: "إسبانيا", code: "+34" },
  { name: "هولندا", code: "+31" },
  { name: "سويسرا", code: "+41" },
  { name: "السويد", code: "+46" },
  { name: "الصين", code: "+86" },
  { name: "اليابان", code: "+81" },
  { name: "الهند", code: "+91" },
  { name: "باكستان", code: "+92" },
  { name: "ماليزيا", code: "+60" },
  { name: "سنغافورة", code: "+65" },
  { name: "جنوب أفريقيا", code: "+27" },
  { name: "نيجيريا", code: "+234" },
  { name: "البرازيل", code: "+55" },
  { name: "المكسيك", code: "+52" },
  { name: "دولة أخرى", code: "" },
];

const stages = [
  "الروضة",
  "الابتدائي",
  "الإعدادي",
  "الثانوي",
  "الجامعة",
];

const subjects = [
  "لغة عربية",
  "لغة إنجليزية",
  "رياضيات",
  "علوم",
  "دراسات اجتماعية",
  "فيزياء",
  "كيمياء",
  "أحياء",
  "برمجة وعلوم حاسب",
  "قرآن كريم وتجويد",
  "فقه وأصول الدين",
  "لغات أخرى",
  "أخرى",
];

const fieldClass =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100";

export default function ParentRequestPage() {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("مصر");
  const [dialCode, setDialCode] = useState("+20");
  const [manualCode, setManualCode] = useState(false);
  const [phone, setPhone] = useState("");
  const [selectedStages, setSelectedStages] = useState<string[]>([]);
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  function toggle(
    value: string,
    selected: string[],
    setter: (items: string[]) => void
  ) {
    setter(
      selected.includes(value)
        ? selected.filter((item) => item !== value)
        : [...selected, value]
    );
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSuccess(false);

    if (!selectedStages.length || !selectedSubjects.length) {
      setError("يرجى اختيار مرحلة دراسية واحدة ومادة دراسية واحدة على الأقل.");
      return;
    }

    if (!dialCode.trim()) {
      setError("يرجى اختيار مفتاح الاتصال الدولي أو إدخاله يدويًا.");
      return;
    }

    setLoading(true);

    try {
      const { error: insertError } = await supabase
        .from("consultation_requests")
        .insert({
          full_name: name.trim(),
          country,
          dial_code: dialCode.trim(),
          phone: phone.trim(),
          education_stages: selectedStages,
          subjects: selectedSubjects,
          notes: notes.trim() || null,
        });

      if (insertError) {
        console.error("Consultation request error:", insertError);
        setError(
          "لم نتمكن من إرسال الطلب. قد يحتاج النموذج إلى إعداد جدول الطلبات في قاعدة البيانات."
        );
        return;
      }

      setSuccess(true);
      setName("");
      setPhone("");
      setNotes("");
      setSelectedStages([]);
      setSelectedSubjects([]);
    } catch {
      setError("حدث خطأ أثناء الاتصال. يرجى المحاولة مرة أخرى.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-emerald-50 px-4 py-8 sm:px-6 sm:py-12"
    >
      <div className="mx-auto max-w-4xl">
        <header className="mb-8 flex items-center justify-between gap-4">
          <Link href="/" className="font-bold text-violet-800 hover:text-violet-950">
            ← العودة إلى مُعلّم
          </Link>

          <Link href="/" className="text-xl font-black text-violet-900 sm:text-2xl">
            📚 مُعلّم <span className="text-emerald-600">· لكل مكان</span>
          </Link>
        </header>

        <section className="mb-8 rounded-3xl bg-gradient-to-l from-violet-800 to-indigo-700 p-7 text-white shadow-xl sm:p-10">
          <span className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm">
            🌍 خدمات تعليمية دولية
          </span>

          <h1 className="mt-5 text-3xl font-black leading-relaxed sm:text-4xl">
            دعنا نساعدك في اختيار المعلم المناسب
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-8 text-violet-100 sm:text-base">
            املأ البيانات التالية وسيتواصل معك فريق مُعلّم لمساعدتك
            في بناء خطة تعليمية تناسب احتياجاتك، أينما كنت.
          </p>
        </section>

        <section className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-xl shadow-violet-900/5">
          {success ? (
            <div className="p-8 py-14 text-center sm:p-14">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-4xl">
                ✓
              </div>

              <h2 className="mt-6 text-2xl font-black text-slate-900">
                تم إرسال طلبك بنجاح
              </h2>

              <p className="mt-3 leading-8 text-slate-600">
                شكرًا لثقتك في مُعلّم. سيستخدم فريقنا بياناتك للتواصل
                معك بخصوص احتياجاتك التعليمية.
              </p>

              <Link
                href="/"
                className="mt-7 inline-flex rounded-xl bg-violet-700 px-6 py-3 font-bold text-white hover:bg-violet-800"
              >
                العودة إلى الرئيسية
              </Link>
            </div>
          ) : (
            <>
              <div className="border-b border-slate-100 px-6 py-6 sm:px-9">
                <h2 className="text-xl font-black text-slate-900">
                  بيانات طلبك
                </h2>
                <p className="mt-2 text-sm text-slate-500">
                  الحقول التي تحمل علامة * مطلوبة لإرسال الطلب.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-7 p-6 sm:p-9">
                <div>
                  <label htmlFor="full-name" className="mb-2 block text-sm font-bold text-slate-700">
                    الاسم الكامل *
                  </label>
                  <input
                    id="full-name"
                    required
                    maxLength={120}
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="أدخل الاسم الكامل"
                    className={fieldClass}
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="country" className="mb-2 block text-sm font-bold text-slate-700">
                      الدولة *
                    </label>
                    <select
                      id="country"
                      required
                      value={country}
                      onChange={(e) => {
                        const value = e.target.value;
                        const found = countries.find((item) => item.name === value);
                        setCountry(value);
                        setDialCode(found?.code ?? "");
                        setManualCode(!found?.code);
                      }}
                      className={fieldClass}
                    >
                      {countries.map((item) => (
                        <option key={item.name} value={item.name}>
                          {item.name}{item.code ? ` (${item.code})` : ""}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="dial-code" className="mb-2 block text-sm font-bold text-slate-700">
                      مفتاح الدولة *
                    </label>

                    <select
                      id="dial-code"
                      value={manualCode ? "manual" : dialCode}
                      onChange={(e) => {
                        if (e.target.value === "manual") {
                          setManualCode(true);
                          setDialCode("");
                        } else {
                          setManualCode(false);
                          setDialCode(e.target.value);
                        }
                      }}
                      className={fieldClass}
                    >
                      {Array.from(
                        new Set(countries.map((item) => item.code).filter(Boolean))
                      ).map((code) => (
                        <option key={code} value={code}>
                          {code}
                        </option>
                      ))}
                      <option value="manual">سأدخل المفتاح يدويًا</option>
                    </select>

                    {manualCode && (
                      <input
                        required
                        aria-label="مفتاح الاتصال الدولي"
                        value={dialCode}
                        onChange={(e) => setDialCode(e.target.value)}
                        placeholder="مثال: +971"
                        maxLength={8}
                        dir="ltr"
                        className={`${fieldClass} mt-3 text-left`}
                      />
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-bold text-slate-700">
                    رقم الهاتف *
                  </label>
                  <div className="flex gap-3" dir="ltr">
                    <span className="flex min-w-20 items-center justify-center rounded-xl bg-violet-50 px-3 font-bold text-violet-800">
                      {dialCode || "+"}
                    </span>
                    <input
                      id="phone"
                      required
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel-national"
                      maxLength={24}
                      value={phone}
                      onChange={(e) =>
                        setPhone(e.target.value.replace(/[^\d\s()-]/g, ""))
                      }
                      placeholder="Phone number"
                      className={`${fieldClass} min-w-0 text-left`}
                    />
                  </div>
                </div>

                <fieldset>
                  <legend className="mb-3 text-sm font-bold text-slate-700">
                    المرحلة الدراسية *{" "}
                    <span className="font-normal text-slate-500">
                      (يمكن اختيار أكثر من مرحلة)
                    </span>
                  </legend>

                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {stages.map((stage) => (
                      <label
                        key={stage}
                        className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 p-4 transition hover:border-violet-300 hover:bg-violet-50"
                      >
                        <input
                          type="checkbox"
                          checked={selectedStages.includes(stage)}
                          onChange={() => toggle(stage, selectedStages, setSelectedStages)}
                          className="h-4 w-4 accent-violet-700"
                        />
                        <span className="text-sm font-medium text-slate-700">
                          {stage}
                        </span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <fieldset>
                  <legend className="mb-3 text-sm font-bold text-slate-700">
                    المواد الدراسية *{" "}
                    <span className="font-normal text-slate-500">
                      (يمكن اختيار أكثر من مادة)
                    </span>
                  </legend>

                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {subjects.map((subject) => (
                      <label
                        key={subject}
                        className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 p-4 transition hover:border-emerald-300 hover:bg-emerald-50"
                      >
                        <input
                          type="checkbox"
                          checked={selectedSubjects.includes(subject)}
                          onChange={() => toggle(subject, selectedSubjects, setSelectedSubjects)}
                          className="h-4 w-4 accent-emerald-600"
                        />
                        <span className="text-sm font-medium text-slate-700">
                          {subject}
                        </span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div>
                  <label htmlFor="notes" className="mb-2 block text-sm font-bold text-slate-700">
                    ملاحظات إضافية{" "}
                    <span className="font-normal text-slate-500">(اختياري)</span>
                  </label>
                  <textarea
                    id="notes"
                    rows={4}
                    maxLength={1000}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="اكتب احتياجاتك التعليمية أو أي تفاصيل إضافية..."
                    className={`${fieldClass} resize-y`}
                  />
                </div>

                {error && (
                  <p role="alert" className="rounded-xl border border-red-100 bg-red-50 p-4 text-sm leading-7 text-red-700">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-xl bg-violet-700 px-5 py-4 font-bold text-white shadow-lg shadow-violet-200 transition hover:bg-violet-800 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "جارٍ إرسال الطلب..." : "إرسال الطلب ←"}
                </button>

                <p className="text-center text-xs leading-6 text-slate-500">
                  ⓘ بإرسال النموذج، توافق على استخدام بياناتك للتواصل معك
                  بخصوص طلبك التعليمي.
                </p>
              </form>
            </>
          )}
        </section>
      </div>
    </main>
  );
}
