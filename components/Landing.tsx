import Image from 'next/image';
import Link from 'next/link';
import type { CSSProperties } from 'react';
import {
  CATALOG_URL,
  CONSULTATION_URL,
  DEFAULT_LOCALE,
  LOCALE_NAMES,
  SWITCHER_LOCALES,
  type Locale,
} from '@/config/site';
import { LANDINGS, type Zone } from '@/config/landing';

const BUTTON_LABELS: Record<Locale, { consultation: string; catalog: string }> = {
  pl: { consultation: 'Konsultacja', catalog: 'Przejdź do katalogu' },
  cs: { consultation: 'Konzultace', catalog: 'Přejít do katalogu' },
  sk: { consultation: 'Konzultácia', catalog: 'Prejsť do katalógu' },
  en: { consultation: 'Consultation', catalog: 'Go to catalog' },
};

const toStyle = (z: Zone): CSSProperties => ({
  left: `${z.left}%`,
  top: `${z.top}%`,
  width: `${z.width}%`,
  height: `${z.height}%`,
});

export default function Landing({ locale }: { locale: Locale }) {
  const img = LANDINGS[locale] ?? LANDINGS[DEFAULT_LOCALE];
  const labels = BUTTON_LABELS[locale];

  return (
    <main className="landing">
      <div className="landing__frame" style={{ '--ratio': img.width / img.height } as CSSProperties}>
        <Image
          className="landing__image"
          src={img.src}
          width={img.width}
          height={img.height}
          alt={img.alt}
          sizes="(max-width: 960px) 100vw, 960px"
          priority
        />

        {SWITCHER_LOCALES.map((code) => (
          <Link
            key={code}
            className="landing__zone"
            href={`/${code}`}
            hrefLang={code}
            aria-label={LOCALE_NAMES[code]}
            aria-current={code === locale ? 'page' : undefined}
            style={toStyle(img.langs[code])}
          />
        ))}

        <a
          className="landing__zone landing__zone--btn"
          href={CONSULTATION_URL}
          aria-label={labels.consultation}
          style={toStyle(img.consultation)}
        />
        <a
          className="landing__zone landing__zone--btn landing__zone--pulse"
          href={CATALOG_URL}
          aria-label={labels.catalog}
          style={toStyle(img.catalog)}
        />
      </div>
    </main>
  );
}
