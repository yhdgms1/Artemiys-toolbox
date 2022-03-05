import { t } from '~/i18n'
import { Heading } from '~/components'

import * as styles from './styles.css'

export const Unknown = () => (
  <Heading
    as="h1"
    class={styles.error}
    children={t(['__errors', 'unknown', 'title'])}
  />
)

export const NotFound = () => (
  <Heading
    as="h1"
    class={styles.error}
    children={t(['__errors', '404', 'title'])}
  />
)
