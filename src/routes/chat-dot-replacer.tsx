import { createSignal } from 'solid-js'
import { t } from '../i18n'
import { Button, CopyButton, Textarea, Container, Heading } from '~/components'
import { Title } from '@solidjs/meta'

export default () => {
  const [input, setInput] = createSignal('')
  const [output, setOutput] = createSignal('')

  const title = t(['chat-dot-replacer', 'title'])

  return (
    <>
      <Title>{title}</Title>
      <Heading as="h2">{title}</Heading>
      <Textarea
        placeholder={t('Enter the text here')}
        onInput={e => setInput(e.currentTarget.value)}
      />
      <Container responsive={true}>
        <Button
          onClick={() =>
            setOutput(
              input().replace(/\./gm, t(['chat-dot-replacer', ' (dot) ']))
            )
          }
        >
          {t(['chat-dot-replacer', 'Replace dots'])}
        </Button>
        <Button
          onClick={() => setOutput(input().replace(/ \((dot|точка)\) /gm, '.'))}
        >
          {t(['chat-dot-replacer', 'Bring it back'])}
        </Button>
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
