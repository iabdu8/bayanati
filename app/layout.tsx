import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
title: "منصة بياناتي",
description: "تحليل البيانات بذكاء",
};

export default function RootLayout({
children,
}: {
children: React.ReactNode;
}) {
return (
<html lang="ar" dir="rtl">
<body>{children}</body>
</html>
);
}
