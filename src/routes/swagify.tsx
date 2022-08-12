import { swagify } from '@artemis69/swagify'
import { createSignal } from 'solid-js'
import { t } from '~/i18n'
import { CopyButton, Textarea, Button, Container, Heading } from '~/components'
import { Title } from '@solidjs/meta'

export default () => {
  const [text, setText] = createSignal('')
  const [output, setOutput] = createSignal('')

  const title = t(['swagify', 'title'])

  return (
    <>
      <Title>{title}</Title>
      <Heading as="h2">{title}</Heading>
      <Textarea
        placeholder={t(['swagify', 'Enter the text to swagify'])}
        onInput={e => setText(e.currentTarget.value)}
      />
      <Container responsive={true}>
        <Button onClick={() => setOutput(swagify(text()))}>Swagify!</Button>
        <CopyButton copy={output()} />
      </Container>
      <Textarea
        readOnly={true}
        value={output()}
        placeholder={t('Result will be here')}
      />
    </>
  )
}
