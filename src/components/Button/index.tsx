import type { JSX } from 'solid-js'
import clsx from 'clsx'

import * as styles from './style.css'

export const Button = (props: JSX.ButtonHTMLAttributes<HTMLButtonElement>) => <button type="button" {...props} class={clsx(styles.button, props.class)}>{props.children}</button>