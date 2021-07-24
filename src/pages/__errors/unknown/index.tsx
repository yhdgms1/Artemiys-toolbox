import * as styles from '../../../styles/index.css'
import clsx from 'clsx'
import { t } from '../../../i18n'

export default () => {
  return (
    <h2 class={clsx(styles.heading2, styles.text)}>
      {t(['__errors', 'unknown', 'title'])}
    </h2>
  )
}
