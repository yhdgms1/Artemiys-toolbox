import { t } from '~/i18n'
import { Card, Heading, Paragraph } from '~/components'
import { Title } from '@solidjs/meta'
import { For } from 'solid-js';

import * as styles from '~/styles/index.css'

const tools = ['score result tool']

export default () => {
  return (
    <>
      <Title>Excel</Title>
      <Heading as="h2">Excel</Heading>
      <Paragraph>{t('cs.0')}</Paragraph>
      <div class={styles.main}>
        <For each={tools}>
          {tool => (
            <Card
              href={'/excel/' + tool.replaceAll(' ', '-')}
              title={tool}
              description={tool}
            />
          )}
        </For>
      </div>
    </>
  )
}
