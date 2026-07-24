import s from './forms.module.scss';
import type { Ref, El } from '@/utils/types';
import { InputProps } from './types';

function TextField({ className = '', ref, name = '', type = 'text', required = false, id = '', placeholder = '' }: InputProps) {
    return (
        <input className={`${className} ${s.TextField}`} name={name} type={type} required={required} placeholder={placeholder} id={id} ref={ref} />
    )
}

export default TextField;