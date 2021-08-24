import * as styles from '../../styles/index.css'
import clsx from 'clsx'
import { t } from '../../i18n'

export const Unknown = () => (
  <h2 class={clsx(styles.text, styles.heading2)}>
    {t(['__errors', 'unknown', 'title'])}
  </h2>
)

export const NotFound = () => (
  <h2 class={clsx(styles.text, styles.heading2)}>
    {t(['__errors', '404', 'title'])}
  </h2>
)
