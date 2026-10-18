```tsx
"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");
    setMessage("");
    setLoading(true);

    try {
      const { error: loginError } =
        await supabase.auth.signInWithPassword({
          email: email.trim(),
          password,
        });

      if (loginError) {
        if (loginError.message === "Invalid login credentials") {
          setError("البريد الإلكتروني أو كلمة المرور غير صحيحة.");
        } else {
          setError("تعذر تسجيل الدخول: " + loginError.message);
        }
        return;
      }

      setMessage("تم تسجيل الدخول بنجاح.");

      router.push("/");
      router.refresh();
    } catch {
      setError(
        "تعذر الاتصال بالخدمة. تحققي من الإنترنت وحاولي مرة أخرى."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main
      dir="rtl"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-violet-50 via-white to-emerald-50 px-4 py-10 sm:px-6"
    >
      {/* خلفية زخرفية */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-violet-200/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl"
      />

      <div className="relative z-10 w-full max-w-5xl">
        {/* الشعار */}
        <div className="mb-7 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-3 rounded-2xl transition hover:opacity-80"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-700 text-3xl shadow-lg shadow-violet-200">
              📚
            </span>

            <span className="text-right">
              <span className="block text-2xl font-black tracking-tight text-violet-950 sm:text-3xl">
                مُعلّم
              </span>
              <span className="mt-1 block text-sm font-medium text-slate-500">
                تعلّم على مقاسك
              </span>
            </span>
          </Link>
        </div>

        {/* البطاقة الرئيسية */}
        <section className="grid overflow-hidden rounded-3xl border border-white bg-white shadow-2xl shadow-violet-900/10 md:grid-cols-2">
          {/* الجانب التعريفي */}
          <div className="relative hidden overflow-hidden bg-gradient-to-br from-violet-800 via-violet-700 to-indigo-700 p-10 text-white md:flex md:flex-col md:justify-between lg:p-12">
            <div
              aria-hidden="true"
              className="absolute -left-16 -top-16 h-52 w-52 rounded-full border-[30px] border-white/10"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-16 -right-10 h-48 w-48 rounded-full bg-fuchsia-400/20 blur-xl"
            />

            <div className="relative">
              <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium">
                ✨ رحلتك التعليمية تبدأ هنا
              </span>

              <h2 className="mt-8 text-3xl font-black leading-relaxed lg:text-4xl">
                تعلّم أفضل،
                <br />
                وتقدّم بثقة.
              </h2>

              <p className="mt-5 max-w-sm text-base leading-8 text-violet-100">
                اكتشف المعلم المناسب لك، وطوّر مهاراتك من خلال تجربة
                تعليمية تناسب مستواك وأهدافك.
              </p>
            </div>

            <div className="relative mt-12 space-y-4">
              <div className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/10 p-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-300 text-2xl">
                  🎯
                </span>
                <div>
                  <p className="font-bold">تعلّم حسب مستواك</p>
                  <p className="mt-1 text-sm text-violet-100">
                    اختر المادة والمرحلة المناسبة لك.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/10 p-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-300 text-2xl">
                  🚀
                </span>
                <div>
                  <p className="font-bold">خطوات نحو النجاح</p>
                  <p className="mt-1 text-sm text-violet-100">
                    ابدأ رحلتك التعليمية اليوم.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* نموذج تسجيل الدخول */}
          <div className="p-6 sm:p-9 lg:p-12">
            <div className="mb-8">
              <p className="mb-3 text-sm font-bold text-violet-700">
                أهلًا بعودتك 👋
              </p>

              <h1 className="text-3xl font-black text-slate-900">
                تسجيل الدخول
              </h1>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                أدخل بيانات حسابك للمتابعة إلى منصة مُعلّم.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-bold text-slate-700"
                >
                  البريد الإلكتروني
                </label>

                <div className="relative">
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-lg"
                  >
                    ✉️
                  </span>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    inputMode="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="name@example.com"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-4 pr-12 text-left text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-100"
                    dir="ltr"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-bold text-slate-700"
                >
                  كلمة المرور
                </label>

                <div className="relative">
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-lg"
                  >
                    🔒
                  </span>

                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="أدخل كلمة المرور"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-20 pr-12 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-100"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((value) => !value)}
                    className="absolute inset-y-0 left-3 px-2 text-xs font-bold text-violet-700 hover:text-violet-900"
                    aria-label={
                      showPassword
                        ? "إخفاء كلمة المرور"
                        : "إظهار كلمة المرور"
                    }
                  >
                    {showPassword ? "إخفاء" : "إظهار"}
                  </button>
                </div>
              </div>

              {error && (
                <div
                  role="alert"
                  className="rounded-xl border border-red-100 bg-red-50 p-4 text-sm leading-7 text-red-700"
                >
                  <span className="font-bold">تعذر الدخول:</span> {error}
                </div>
              )}

              {message && (
                <div
                  role="status"
                  className="rounded-xl border border-emerald-100 bg-emerald-50 p-4 text-sm text-emerald-700"
                >
                  {message}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-violet-700 px-5 py-4 font-bold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-0.5 hover:bg-violet-800 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
              >
                {loading ? (
                  <>
                    <span
                      aria-hidden="true"
                      className="h-5 w-5 animate-spin rounded-full border-2 border-white/40 border-t-white"
                    />
                    جارٍ تسجيل الدخول...
                  </>
                ) : (
                  <>
                    دخول إلى حسابي
                    <span aria-hidden="true">←</span>
                  </>
                )}
              </button>
            </form>

            <div className="my-7 flex items-center gap-3">
              <div className="h-px flex-1 bg-slate-100" />
              <span className="text-xs text-slate-400">
                حسابك على مُعلّم
              </span>
              <div className="h-px flex-1 bg-slate-100" />
            </div>

            <p className="text-center text-sm text-slate-600">
              ليس لديك حساب؟
              <Link
                href="/register"
                className="mr-1 font-bold text-violet-700 underline-offset-4 hover:underline"
              >
                إنشاء حساب جديد
              </Link>
            </p>

            <Link
              href="/"
              className="mt-5 flex items-center justify-center gap-2 text-sm font-medium text-slate-500 transition hover:text-violet-700"
            >
              <span aria-hidden="true">→</span>
              العودة إلى الصفحة الرئيسية
            </Link>
          </div>
        </section>

        <p className="mt-6 text-center text-xs leading-6 text-slate-500">
          منصة مُعلّم — تعلّم على مقاسك © {new Date().getFullYear()}
        </p>
      </div>
    </main>
  );
}
```
