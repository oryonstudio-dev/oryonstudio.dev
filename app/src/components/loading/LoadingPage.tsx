'use client';

import { Children } from '@/utils/types';
import styles from './LoadingPage.module.scss';

const s = styles;
const ROWS = 4;

function LoadingPage({ children }: Children) {
    return (
        <>
            <div className={s.grid}>
                { Array.from({ length: ROWS }).map((_, i) => (
                    <div key={i} className={s.block} />
                )) }

                <div className={s.branding}>
                    <h1>
                        <span className={s.oryon} >ORYON</span>
                        <span className={s.studio}>STUDIO</span>
                    </h1>
                </div>
            </div>
            { children }
        </>
    );
}

export default LoadingPage;