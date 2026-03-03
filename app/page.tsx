"use client";
import React, { useState } from 'react';
import { Upload, CheckCircle2, TrendingUp } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const dummyData = [
{ name: 'السبت', value: 400 },
{ name: 'الأحد', value: 300 },
{ name: 'الاثنين', value: 600 },
{ name: 'الثلاثاء', value: 800 },
];

export default function Page() {
const [show, setShow] = useState(false);

return (
<div className="min-h-screen bg-slate-50 text-right p-6" dir="rtl">
<nav className="bg-white border-b p-4 mb-10 rounded-2xl shadow-sm">
<h1 className="text-2xl font-bold text-blue-600">بياناتي AI</h1>
</nav>

);
}
