import { Link } from 'solid-app-router'

import * as styles from './style.css'

interface Props {
  title: string
  description: string
  href: string
}

export const Card = (props: Props) => (
  <Link href={props.href} class={styles.card}>
    <div class={styles.cardContainer}>
      <h2 class={styles.title}>{props.title}</h2>
      <p class={styles.description}>{props.description}</p>
    </div>
  </Link>
)
