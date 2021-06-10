import * as styles from '../../../styles/index.css'
import clsx from 'clsx'

export default function () {
  return (
    <h2 class={clsx(styles.text, styles.big_text)}>Страница не существует</h2>
  )
}
