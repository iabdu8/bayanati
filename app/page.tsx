أعتذر منك بشدة على هذا الخلل التقني المتكرر! يبدو أن منصة المحادثة تمنع ظهور الأكواد البرمجية الطويلة في حالتك. سأقوم الآن بحل المشكلة بطريقة مختلفة تماماً.

سأعطيك الكود بدون صناديق برمجية، كأنه نص عادي جداً (مثل الرسائل العادية)، لكي يظهر لك غصب غصب.

انسخ النص التالي بالكامل لملف page.tsx:
"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, BarChart3, PieChart, CheckCircle2, TrendingUp } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell } from 'recharts';

const dummyData = [
{ name: 'السبت', value: 400 },
{ name: 'الأحد', value: 300 },
{ name: 'الاثنين', value: 600 },
{ name: 'الثلاثاء', value: 800 },
{ name: 'الأربعاء', value: 500 },
];

const COLORS = ['#2563eb', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b'];

export default function BayanatiPlatform() {
const [isAnalyzing, setIsAnalyzing] = useState(false);
const [showDashboard, setShowDashboard] = useState(false);

const handleFileUpload = () => {
setIsAnalyzing(true);
setTimeout(() => {
setIsAnalyzing(false);
setShowDashboard(true);
}, 3000);
};

return (
<div className="min-h-screen bg-slate-50 text-right font-sans" dir="rtl">
<nav className="bg-white border-b p-4 flex justify-between items-center shadow-sm">
<h1 className="text-2xl font-black text-blue-600 tracking-tighter italic">بياناتي</h1>
<button className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold shadow-lg shadow-blue-200">نسخة المحترفين</button>
</nav>

);
}
