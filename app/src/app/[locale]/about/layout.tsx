import { Children } from '@/utils/types';
import Footer from '@/components/Footer/Footer';
import { MetadataParams } from '@/i18n/types';
import { Metadata } from 'next';
import { readMetadata, checkLocale } from '@/i18n/functions';

import dynamic from 'next/dynamic';
const ScrollSmootherWrapper = dynamic(() => import('@/utils/gsap/ScrollSmoother'), { ssr: false });

export async function generateMetadata({ params }: MetadataParams): Promise<Metadata> {
    const { locale } = await params;
    checkLocale(locale);
    return readMetadata('about');
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