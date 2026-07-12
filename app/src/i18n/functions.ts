import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Locale } from './types';
import { notFound } from 'next/navigation';
import { routing } from './routing';

export async function readMetadata(page: string): Promise<Metadata> {
    const t = await getTranslations(`${page}.metadata`);

    return {
        title: t('title'),
        description: t('description')
    }
}

export function checkLocale(locale: string) {
    if (!routing.locales.includes(locale as Locale)) notFound();
}
