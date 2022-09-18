import { t } from '~/i18n'
import { Heading } from '~/components'

import * as styles from './styles.css'

export const Unknown = () => (
  <Heading as="h1" class={styles.error} children={t('global.4')} />
)

export const NotFound = () => (
  <Heading as="h1" class={styles.error} children={t('global.3')} />
)
