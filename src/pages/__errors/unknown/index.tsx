import * as styles from '../../../styles/index.css'
import clsx from 'clsx'
import { t } from '../../../i18n'

export default () => {
  return (
    <div>
      <h2 class={clsx(styles.big_text, styles.text)}>
        {t(['__errors', 'unknown', 'title'])}
      </h2>
      <p class={styles.text}>{t(['__errors', 'desc', 'title'])}</p>
    </div>
  )
}
