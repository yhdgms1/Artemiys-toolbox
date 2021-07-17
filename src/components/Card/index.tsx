import { Link } from 'solid-app-router'

import * as styles from './style.css'

interface Props {
  title: string
  description: string
  href: string
}

export const Card = (props: Props) => (
  <Link href={props.href} class={styles.card}>
    <span class={styles.cardContainer}>
      <h2 aria-hidden="true" class={styles.title}>
        {props.title}
      </h2>
      <span class={styles.description}>{props.description}</span>
    </span>
  </Link>
)
