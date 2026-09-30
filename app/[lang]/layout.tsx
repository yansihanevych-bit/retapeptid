import type { Metadata, Viewport } from 'next';
import { notFound } from 'next/navigation';
import { LOCALES, type Locale } from '@/config/site';
import '../globals.css';

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export const metadata: Metadata = {
  title: 'SLIMAX',
  description: 'SLIMAX — consultation, catalog and a 10% discount promo code: SLIMAX10.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0E211B',
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!LOCALES.includes(lang as Locale)) notFound();

  return (
    <html lang={lang}>
      <body>{children}</body>
    </html>
  );
}
