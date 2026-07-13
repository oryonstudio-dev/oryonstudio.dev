import styles from './page.module.scss';
import ScrollSmootherWrapper from '@/utils/gsap/ScrollSmoother';
import Footer from '@/components/Footer/Footer';
import Slide from '@/components/Slide/Slide';
import { useTranslations } from 'next-intl';
import LiquidAurora from '@/components/shaders/LiquidAurora';

const s = styles;

function Home() {
  const t = useTranslations('home.content');

  return (
    <ScrollSmootherWrapper>
      <main className="Main">
        <Slide className={s.Hero}>
          <LiquidAurora />
          <h1>{ t('page under construction') } <span className={s.pointer}>█</span></h1>
        </Slide>
      </main>
      <Footer />
    </ScrollSmootherWrapper>
  );
}

export default Home;