import { Children } from '@/utils/types';
import ScrollSmootherWrapper from '@/utils/gsap/ScrollSmoother';
import Footer from '@/components/Footer/Footer';
import { Metadata } from 'next';
import { routing } from '@/i18n/routing';
import { MetadataParams, Locale } from '@/i18n/types';
import { readMetadata } from '@/i18n/functions';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: MetadataParams): Promise<Metadata> {
    const { locale } = await params;
    if (!routing.locales.includes(locale as Locale)) notFound();
    return readMetadata('services');
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