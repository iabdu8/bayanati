/** @type {import('next').NextConfig} */
const nextConfig = {
output: 'export',  // هذا السطر هو السر، يجعل الموقع يشتغل كملفات ثابتة
images: {
unoptimized: true, // ضروري لأن Cloudflare Pages لا يدعم تحسين الصور التلقائي في وضع الـ export
},
typescript: {
ignoreBuildErrors: true,
},
eslint: {
ignoreDuringBuilds: true,
},
};

export default nextConfig;
