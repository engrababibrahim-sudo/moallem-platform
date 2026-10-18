"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setMessage("");
    setLoading(true);

    try {
      const { error: loginError } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });

      if (loginError) {
        setError(
          loginError.message === "Invalid login credentials"
            ? "البريد الإلكتروني أو كلمة المرور غير صحيحة."
            : loginError.message
        );
        return;
      }

      setMessage("تم تسجيل الدخول بنجاح.");
      router.push("/");
      router.refresh();
    } catch {
      setError("تعذر الاتصال بالخدمة. تحققي من إعدادات Supabase والإنترنت.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main
      dir="rtl"
      className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-10"
    >
      <section className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="mb-7 text-center">
          <h1 className="text-2xl font-bold text-slate-900">
            تسجيل الدخول
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            منصة مُعلّم — تعلّم على مقاسك
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              البريد الإلكتروني
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="name@example.com"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              كلمة المرور
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="أدخلي كلمة المرور"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {error && (
            <p
              role="alert"
              className="rounded-lg bg-red-50 p-3 text-sm text-red-700"
            >
              {error}
            </p>
          )}

          {message && (
            <p
              role="status"
              className="rounded-lg bg-green-50 p-3 text-sm text-green-700"
            >
              {message}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-blue-700 px-4 py-3 font-semibold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "جارٍ تسجيل الدخول..." : "دخول"}
          </button>
        </form>

        <p className="mt-6 text-center text-xs leading-6 text-slate-500">
          يتم التحقق من بيانات الدخول بواسطة Supabase.
          لا تنشئي حسابًا جديدًا للاختبار إذا كنتِ تريدين استخدام حساب قديم.
        </p>
      </section>
    </main>
  );
}
