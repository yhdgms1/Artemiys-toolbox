import type { JSX } from 'solid-js'
import * as styles from './style.css'

export const Checkbox = (props: JSX.InputHTMLAttributes<HTMLInputElement>) => (
    <label class={styles.label}>
        <input type="checkbox" name="is_private" {...props}/>
        <span class={styles.text}>{props.children}</span>
    </label>
)
