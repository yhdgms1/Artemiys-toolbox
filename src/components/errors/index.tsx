import type { ErrorBoundary } from 'solid-js'

import { t } from '~/i18n'
import { Heading, Paragraph } from '~/components'

import * as styles from './styles.css'

type FallbackComponent = Parameters<typeof ErrorBoundary>[0]['fallback']

export const Unknown: FallbackComponent = (error, reset) => (
  <>
    <Heading as="h1" class={styles.error} children={t('global.4')} />
    <Paragraph
      children={error instanceof Error ? error.message : String(error)}
    />
  </>
)

export const NotFound = () => (
  <Heading as="h1" class={styles.error} children={t('global.3')} />
)
