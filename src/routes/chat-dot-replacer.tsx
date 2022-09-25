import { t } from '../i18n'
import { Button, CopyButton, Textarea, Container, Heading } from '~/components'
import { Title } from '@solidjs/meta'
import { channel } from '~/lib'

export default () => {
  const input = channel('')
  const output = channel('')

  const title = t('chat-dot-replacer.0')

  return (
    <>
      <Title>{title}</Title>
      <Heading as="h2">{title}</Heading>
      <Textarea
        placeholder={t('global.9')}
        onInput={e => input(e.currentTarget.value)}
      />
      <Container responsive={true}>
        <Button
          onClick={() => {
            output(input().replace(/\./gm, t('chat-dot-replacer.3')))
          }}
        >
          {t('chat-dot-replacer.1')}
        </Button>
        <Button
          onClick={() => {
            output(input().replace(/ \((dot|точка)\) /gm, '.'))
          }}
        >
          {t('chat-dot-replacer.2')}
        </Button>
        <CopyButton copy={output()} />
      </Container>
      <Textarea readOnly={true} value={output()} placeholder={t('global.10')} />
    </>
  )
}
