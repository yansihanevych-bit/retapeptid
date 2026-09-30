// СГЕНЕРИРОВАНО design/render.mjs — не редактируйте вручную, перезапустите рендер.
// Картинки лендинга по языкам и координаты кликабельных зон (в % от размеров картинки).

import type { Locale } from './site';

export type Zone = { left: number; top: number; width: number; height: number };

export type LandingImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
  langs: Record<'pl' | 'cs' | 'sk' | 'en', Zone>;
  consultation: Zone;
  catalog: Zone;
};

export const LANDINGS: Record<Locale, LandingImage> = {
  "pl": {
    "src": "/landing-pl.webp",
    "width": 1920,
    "height": 2988,
    "langs": {
      "pl": {
        "left": 60.208,
        "top": 0.536,
        "width": 8.125,
        "height": 10.178
      },
      "cs": {
        "left": 68.542,
        "top": 0.536,
        "width": 8.125,
        "height": 10.178
      },
      "sk": {
        "left": 76.875,
        "top": 0.536,
        "width": 8.125,
        "height": 10.178
      },
      "en": {
        "left": 85.208,
        "top": 0.536,
        "width": 8.125,
        "height": 10.178
      }
    },
    "consultation": {
      "left": 11.458,
      "top": 43.957,
      "width": 77.083,
      "height": 8.571
    },
    "catalog": {
      "left": 11.458,
      "top": 54,
      "width": 77.083,
      "height": 8.571
    },
    "alt": "Dzień dobry! Dziękujemy za zainteresowanie naszym produktem! Sprawdzamy, czy nie jesteś robotem. Wybierz sposób otrzymania: Konsultacja Przejdź do katalogu Twój kod rabatowy na 10% zniżki: SLIMAX10"
  },
  "cs": {
    "src": "/landing-cs.webp",
    "width": 1920,
    "height": 2988,
    "langs": {
      "pl": {
        "left": 60.208,
        "top": 0.536,
        "width": 8.125,
        "height": 10.178
      },
      "cs": {
        "left": 68.542,
        "top": 0.536,
        "width": 8.125,
        "height": 10.178
      },
      "sk": {
        "left": 76.875,
        "top": 0.536,
        "width": 8.125,
        "height": 10.178
      },
      "en": {
        "left": 85.208,
        "top": 0.536,
        "width": 8.125,
        "height": 10.178
      }
    },
    "consultation": {
      "left": 11.458,
      "top": 43.957,
      "width": 77.083,
      "height": 8.571
    },
    "catalog": {
      "left": 11.458,
      "top": 54,
      "width": 77.083,
      "height": 8.571
    },
    "alt": "Dobrý den! Děkujeme za váš zájem o náš produkt! Ověřujeme, že nejste robot. Vyberte si způsob získání: Konzultace Přejít do katalogu Váš slevový kód na 10 %: SLIMAX10"
  },
  "sk": {
    "src": "/landing-sk.webp",
    "width": 1920,
    "height": 2988,
    "langs": {
      "pl": {
        "left": 60.208,
        "top": 0.536,
        "width": 8.125,
        "height": 10.178
      },
      "cs": {
        "left": 68.542,
        "top": 0.536,
        "width": 8.125,
        "height": 10.178
      },
      "sk": {
        "left": 76.875,
        "top": 0.536,
        "width": 8.125,
        "height": 10.178
      },
      "en": {
        "left": 85.208,
        "top": 0.536,
        "width": 8.125,
        "height": 10.178
      }
    },
    "consultation": {
      "left": 11.458,
      "top": 43.957,
      "width": 77.083,
      "height": 8.571
    },
    "catalog": {
      "left": 11.458,
      "top": 54,
      "width": 77.083,
      "height": 8.571
    },
    "alt": "Dobrý deň! Ďakujeme za váš záujem o náš produkt! Overujeme, že nie ste robot. Vyberte si spôsob získania: Konzultácia Prejsť do katalógu Váš zľavový kód na 10 %: SLIMAX10"
  },
  "en": {
    "src": "/landing-en.webp",
    "width": 1920,
    "height": 2988,
    "langs": {
      "pl": {
        "left": 60.208,
        "top": 0.536,
        "width": 8.125,
        "height": 10.178
      },
      "cs": {
        "left": 68.542,
        "top": 0.536,
        "width": 8.125,
        "height": 10.178
      },
      "sk": {
        "left": 76.875,
        "top": 0.536,
        "width": 8.125,
        "height": 10.178
      },
      "en": {
        "left": 85.208,
        "top": 0.536,
        "width": 8.125,
        "height": 10.178
      }
    },
    "consultation": {
      "left": 11.458,
      "top": 43.957,
      "width": 77.083,
      "height": 8.571
    },
    "catalog": {
      "left": 11.458,
      "top": 54,
      "width": 77.083,
      "height": 8.571
    },
    "alt": "Hello! Thank you for your interest in our product! We are checking that you are not a robot. Please choose how you would like to proceed: Consultation Go to catalog Your 10% discount promo code: SLIMAX10"
  }
};
