import styles from './page.module.scss';
import ScrollSmootherWrapper from '@/utils/gsap/ScrollSmoother';
import Footer from '@/components/Footer/Footer';
import Slide from '@/components/Slide/Slide';
import { useTranslations } from 'next-intl';
import LiquidAurora from '@/components/shaders/LiquidAurora';
import Link from 'next/link';
import GlassRect from '@/components/shaders/GlassRect';

const s = styles;

function Home() {
  const t = useTranslations('home.content');

  return (
    <ScrollSmootherWrapper>
      <main className="Main">
        <Slide className={s.Hero}>
          <LiquidAurora />
          <section className={s.content}>
            <p className={s.availability}><span className={s.indicator}></span><span className={s.text}>Available for select Q3/Q4 projects</span></p>
            <h1>The cosmic standard for <strong>standout brands</strong></h1>
            <p className={s.lead}>ORYON STUDIO builds custom Next.js web applications for brands that refuse to look generic. We pair <strong>custom front-end design</strong> with <strong>modern React architecture</strong> to deliver fast, standalone sites built <strong>strictly from scratch</strong>.</p>
            <div className={s.cta}>
              <Link href='/contact' className={s.button}>Work with Us</Link>
              <p className={s.label}>Starting from $2000</p>
            </div>
            <GlassRect />
          </section>
        </Slide>
      </main>
      <Footer />
    </ScrollSmootherWrapper>
  );
}

export default Home;