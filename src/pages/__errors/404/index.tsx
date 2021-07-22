import * as styles from '../../../styles/index.css'
import clsx from 'clsx'
import { t } from '../../../i18n'

export default () => {
  return (
    <h2 class={clsx(styles.text, styles.heading2)}>
      {t(['__errors', '404', 'title'])}
    </h2>
  )
}
