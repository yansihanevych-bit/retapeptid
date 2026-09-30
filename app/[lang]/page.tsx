import Landing from '@/components/Landing';
import type { Locale } from '@/config/site';

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return <Landing locale={lang as Locale} />;
}
