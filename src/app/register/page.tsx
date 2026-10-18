"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  async function handleRegister(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setMessage("");

    if (password.length < 8) {
      setError("يجب أن تتكون كلمة المرور من 8 أحرف على الأقل.");
      return;
    }

    setLoading(true);

    try {
      const { data, error: signupError } = await supabase.auth.signUp({
        email: email.trim(),
        password,
        options: {
          data: {
            full_name: name.trim(),
            requested_role: role,
          },
        },
      });

      if (signupError) {
        setError(
          signupError.message === "User already registered"
            ? "هذا البريد مسجل بالفعل. جرّبي تسجيل الدخول."
            : signupError.message
        );
        return;
      }

      if (data.session) {
        router.push("/");
        router.refresh();
        return;
      }

      setMessage(
        "تم إرسال طلب التسجيل. إذا كان تأكيد البريد مطلوبًا، افتحي بريدك الإلكتروني لتفعيل الحساب."
      );
    } catch {
      setError("تعذر الاتصال بالخدمة. تحققي من إعدادات Supabase.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main
      dir="rtl"
      className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-10"
    >
      <section className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h1 className="text-center text-3xl font-bold text-slate-900">
          انضم إلى مُعلّم
        </h1>

        <p className="mb-7 mt-3 text-center text-slate-600">
          أنشئ حسابك وابدأ رحلتك التعليمية.
        </p>

        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label htmlFor="name" className="mb-2 block font-medium">
              الاسم بالكامل
            </label>
            <input
              id="name"
              type="text"
              autoComplete="name"
              required
              maxLength={100}
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="اكتب الاسم بالكامل"
              className="w-full rounded-lg border border-slate-300 px-4 py-3"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block font-medium">
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
              className="w-full rounded-lg border border-slate-300 px-4 py-3"
            />
          </div>

          <div>
            <label htmlFor="role" className="mb-2 block font-medium">
              نوع الحساب
            </label>
            <select
              id="role"
              value={role}
              onChange={(event) => setRole(event.target.value)}
              className="w-full rounded-lg border border-slate-300 px-4 py-3"
            >
              <option value="student">طالب</option>
              <option value="parent">ولي أمر</option>
              <option value="teacher">معلم — طلب انضمام</option>
            </select>
          </div>

          <div>
            <label htmlFor="password" className="mb-2 block font-medium">
              كلمة المرور
            </label>
            <input
              id="password"
              type="password"
              autoComplete="new-password"
              required
              minLength={8}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="8 أحرف على الأقل"
              className="w-full rounded-lg border border-slate-300 px-4 py-3"
            />
          </div>

          {error && (
            <p role="alert" className="rounded-lg bg-red-50 p-3 text-red-700">
              {error}
            </p>
          )}

          {message && (
            <p
              role="status"
              className="rounded-lg bg-green-50 p-3 text-green-800"
            >
              {message}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-blue-700 px-4 py-3 font-bold text-white hover:bg-blue-800 disabled:opacity-60"
          >
            {loading ? "جارٍ إنشاء الحساب..." : "إنشاء حساب"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-600">
          لديك حساب بالفعل؟{" "}
          <a href="/login" className="font-bold text-blue-700">
            تسجيل الدخول
          </a>
        </p>
      </section>
    </main>
  );
}
