import { createSignal } from 'solid-js'
import Graphemer from 'graphemer'
import { t } from '~/i18n'
import { Textarea, Heading, Paragraph } from '~/components'
import { Title } from 'solid-meta'

export default () => {
  const [text, setText] = createSignal('')
  const splitter = new Graphemer()

  const title = t(['character-count', 'title'])

  return (
    <>
      <Title>{title}</Title>
      <Heading as="h2">{title}</Heading>
      <Paragraph>
        {t(['character-count', 'Number of characters'])}
        {splitter.countGraphemes(text())}
      </Paragraph>
      <Paragraph>
        {t(['character-count', 'Number of characters without whitespaces'])}
        {splitter.countGraphemes(text().replace(/ /g, ''))}
      </Paragraph>
      <Textarea
        placeholder={t(['character-count', 'textarea'])}
        spellcheck={false}
        onInput={e => setText(e.currentTarget.value)}
      />
    </>
  )
}
