import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function readMetadata(page: string): Promise<Metadata> {
    const t = await getTranslations(`${page}.metadata`);

    return {
        title: t('title'),
        description: t('description')
    }
}