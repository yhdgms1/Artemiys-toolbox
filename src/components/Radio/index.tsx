import type { JSX } from 'solid-js'
import * as styles from './style.css'

export const Radio = (props: JSX.InputHTMLAttributes<HTMLInputElement>) => (
  <div class={styles.checkbox}>
    <input type="radio" {...props} class={styles.input} />
    <label for={props.id}>{props.children}</label>
  </div>
)
