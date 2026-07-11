import { Children } from '@/utils/types';
import ScrollSmootherWrapper from '@/utils/gsap/ScrollSmoother';
import Footer from '@/components/Footer/Footer';
import { Locale, MetadataParams } from '@/i18n/types';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { readMetadata } from '@/i18n/functions';

export async function generateMetadata({ params }: MetadataParams): Promise<Metadata> {
    const { locale } = await params;
    if (!routing.locales.includes(locale as Locale)) notFound();
    return readMetadata('contact');
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