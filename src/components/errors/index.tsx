import * as styles from '../../styles/index.css'
import { t } from '~/i18n'
import { Heading } from '~/components'

export const Unknown = () => (
  <Heading
    as="h1"
    class={styles.text}
    children={t(['__errors', 'unknown', 'title'])}
  />
)

export const NotFound = () => (
  <Heading
    as="h1"
    class={styles.text}
    children={t(['__errors', '404', 'title'])}
  />
)
