import { t } from '~/i18n'
import { Card, Heading, Paragraph } from '~/components'
import { Title } from '@solidjs/meta'
import { cs, cdashs } from '~/lib/constants'

import * as styles from '~/styles/index.css'

const methods = ['using vk', 'manually', 'remove', 'picture', 'picture vk']

export default () => {
  return (
    <>
      <Title>{cs}</Title>
      <Heading as="h2">{cs}</Heading>
      <Paragraph>{t('cs.0')}</Paragraph>
      <div class={styles.main}>
        {methods.map((method, i) => (
          <Card
            href={'/' + cdashs + '/' + method.replace(' ', '-')}
            title={method}
            description={t('cs.home.' + i.toString())}
          />
        ))}
      </div>
    </>
  )
}
