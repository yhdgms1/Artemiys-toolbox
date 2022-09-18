import { createSignal } from 'solid-js'
import { t } from '../i18n'
import { Button, CopyButton, Textarea, Container, Heading } from '~/components'
import { Title } from '@solidjs/meta'

export default () => {
  const [input, setInput] = createSignal('')
  const [output, setOutput] = createSignal('')

  const title = t('chat-dot-replacer.0')

  return (
    <>
      <Title>{title}</Title>
      <Heading as="h2">{title}</Heading>
      <Textarea
        placeholder={t('global.9')}
        onInput={e => setInput(e.currentTarget.value)}
      />
      <Container responsive={true}>
        <Button
          onClick={() =>
            setOutput(input().replace(/\./gm, t('chat-dot-replacer.3')))
          }
        >
          {t('chat-dot-replacer.1')}
        </Button>
        <Button
          onClick={() => setOutput(input().replace(/ \((dot|точка)\) /gm, '.'))}
        >
          {t('chat-dot-replacer.2')}
        </Button>
        <CopyButton copy={output()} />
      </Container>
      <Textarea readOnly={true} value={output()} placeholder={t('global.10')} />
    </>
  )
}
