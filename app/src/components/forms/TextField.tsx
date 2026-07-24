import s from './forms.module.scss';
import type { Ref, El } from '@/utils/types';

interface Props {
    className?:   string;
    ref?:         Ref<HTMLInputElement>;
    name?:        string;
    type?:        string;
    required?:    boolean;
    id?:          string;
    placeholder?: string;
}

function TextField({ className = '', ref, name = '', type = 'text', required = false, id = '', placeholder = '' }: Props) {
    return (
        <input className={`${className} ${s.TextField}`} name={name} type={type} required={required} placeholder={placeholder} id={id} ref={ref} />
    )
}

export default TextField;