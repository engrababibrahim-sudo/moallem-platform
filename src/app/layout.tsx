
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "مُعلّم | تعلّم على مقاسك",
  description:
    "منصة مُعلّم للتعليم الخصوصي، تساعد الطلاب وأولياء الأمور على الوصول إلى المعلم المناسب ومتابعة الرحلة التعليمية.",
  applicationName: "مُعلّم",
  keywords: [
    "مُعلّم",
    "دروس خصوصية",
    "معلمون",
    "تعليم",
    "متابعة الطلاب",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
