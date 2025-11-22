import { cookies } from 'next/headers';

type Locale = 'en' | 'pl';

const translations: Record<Locale, { hero: { title: string; description: string; badge: string } }> = {
  en: {
    hero: {
      badge: 'Finance',
      title: 'Check the latest crypto price index.',
      description:
        "Stay updated with the latest bitcoin price index, offering real-time data, historical trends, and market insights to keep you informed about the cryptocurrency's value fluctuations.",
    },
  },
  pl: {
    hero: {
      badge: 'Finanse',
      title: 'Sprawdź najnowszy indeks cen kryptowalut.',
      description:
        'Bądź na bieżąco z najnowszym indeksem cen bitcoina, oferując dane w czasie rzeczywistym, trendy historyczne i informacje rynkowe, które pomogą Ci śledzić zmiany wartości kryptowalut.',
    },
  },
};

export const getCurrentLocale = (): Locale => {
  const cookieLocale = cookies().get('NEXT_LOCALE')?.value;
  return (cookieLocale as Locale) || 'en';
};

export const getHeroTranslations = (locale: Locale) => translations[locale] ?? translations.en;
