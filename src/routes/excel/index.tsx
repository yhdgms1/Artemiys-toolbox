import { t } from '~/i18n'
import { Card, Heading, Paragraph } from '~/components'
import { Title } from '@solidjs/meta'

import * as styles from '~/styles/index.css'

const tools = ['score result tool']

export default () => {
  return (
    <>
      <Title>Excel</Title>
      <Heading as="h2">Excel</Heading>
      <Paragraph>{t('cs.0')}</Paragraph>
      <div class={styles.main}>
        {tools.map((method, i) => (
          <Card
            href={'/excel/' + method.replaceAll(' ', '-')}
            title={method}
            description={method}
          />
        ))}
      </div>
    </>
  )
}
