import { createSignal } from 'solid-js'
import { t } from '~/i18n'
import { Textarea, Heading, Paragraph } from '~/components'
import { Title } from '@solidjs/meta'

import Graphemer from 'graphemer'

export default () => {
  const [text, setText] = createSignal('')

  const splitter = new Graphemer()
  const countGraphemes = splitter.countGraphemes

  const title = t('character-count.0')

  return (
    <>
      <Title>{title}</Title>
      <Heading as="h2">{title}</Heading>
      <Paragraph>
        {t('character-count.2')}
        {countGraphemes(text())}
      </Paragraph>
      <Paragraph>
        {t('character-count.3')}
        {countGraphemes(text().replace(/ /g, ''))}
      </Paragraph>
      <Textarea
        placeholder={t('character-count.1')}
        spellcheck={false}
        onInput={e => setText(e.currentTarget.value)}
      />
    </>
  )
}
