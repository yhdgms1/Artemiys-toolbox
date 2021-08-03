import type { JSX } from 'solid-js'
import * as styles from './style.css'

export const Checkbox = (props: JSX.InputHTMLAttributes<HTMLInputElement>) => (
  <div class={styles.checkbox}>
    <input type="checkbox" name="is_private" {...props} class={styles.input}/>
    <label class={styles.label} for={props.id}>{props.children}</label>
  </div>
)
