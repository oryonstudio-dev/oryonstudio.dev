import { Children } from '@/utils/types';
import ScrollSmootherWrapper from '@/utils/gsap/ScrollSmoother';
import Footer from '@/components/Footer/Footer';
import { Metadata } from 'next';
import { MetadataParams } from '@/i18n/types';
import { readMetadata, checkLocale } from '@/i18n/functions';

export async function generateMetadata({ params }: MetadataParams): Promise<Metadata> {
    const { locale } = await params;
    checkLocale(locale);
    return readMetadata('experience');
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