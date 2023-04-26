import type { VoidComponent } from 'solid-js'
import { Link } from '@solidjs/router'

import * as styles from './style.css'

interface Props {
  title: string
  description: string
  href: string
}

export const Card: VoidComponent<Props> = props => (
  <div class={styles.card}>
    <h2 class={styles.title}>{props.title}</h2>
    <Link href={props.href} class={styles.description} innerHTML={props.description} />
  </div>
)
