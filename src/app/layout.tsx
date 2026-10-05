import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Komunitas Berbagi Baik',
  description: 'Lanjutkan berbagi cerita dan terhubung dengan komunitas.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${plusJakartaSans.variable} h-full antialiased`}>
      <body className="h-full bg-white text-gray-900">
        {children}

        {/* Memuat skrip Netlify HUD secara lazyOnload untuk efisiensi jaringan & cache */}
        <Script
          src="https://ifs24021-pabwe2026-nextjs.netlify.app/.netlify/scripts/hud?variant=public"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}