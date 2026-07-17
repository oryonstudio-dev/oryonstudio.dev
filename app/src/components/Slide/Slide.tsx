import styles from './Slide.module.scss';
import { Children, Ref } from '@/utils/types';

const s = styles;

interface Props extends Children {
    className?: string;
    ref?: Ref;
    id?: string;
}

function Slide({ children, className, ref, id } : Props) {
    return (
        <section className={`${className} ${s.slide}`} ref={ref} id={id}>
            {children}
        </section>
    );
}

export default Slide;