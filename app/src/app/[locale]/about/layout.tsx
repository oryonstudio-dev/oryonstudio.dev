import { Children } from '@/utils/types';
import ScrollSmootherWrapper from '@/utils/gsap/ScrollSmoother';
import Footer from '@/components/Footer/Footer';
import { Locale, MetadataParams } from '@/i18n/types';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

export async function generateMetadata({ params }: MetadataParams): Promise<Metadata> {
    const { locale } = await params;
    if (!routing.locales.includes(locale as Locale)) notFound();
    const t = await getTranslations('about.metadata');

    return {
        title: t('title'),
        description: t('description')
    }
}

function Layout({ children }: Children) {
    return (
        <ScrollSmootherWrapper>
            <main>
                { children }
            </main>
            <Footer />
        </ScrollSmootherWrapper>
    )
}

export default Layout;