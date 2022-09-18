import { createSignal } from 'solid-js'
import { t } from '~/i18n'
import {
  CopyButton,
  Textarea,
  Button,
  Checkbox,
  Container,
  Heading,
} from '~/components'
import { Title } from '@solidjs/meta'
import { murmurHash } from 'ohash'

export default () => {
  const [text, setText] = createSignal('')
  const [output, setOutput] = createSignal('')
  const [radix, setRadix] = createSignal(10)

  const title = 'Murmur Hash'

  return (
    <>
      <Title>{title}</Title>
      <Heading as="h2">{title}</Heading>
      <Textarea
        placeholder={t('global.9')}
        onInput={e => setText(e.currentTarget.value)}
      />
      <Container responsive={true}>
        <Button onClick={() => setOutput(murmurHash(text()).toString(radix()))}>
          {t('murmur-hash.0')}
        </Button>
        <CopyButton copy={output()} />
      </Container>
      <Checkbox
        checked={radix() === 36}
        onChange={e => setRadix(e.currentTarget.checked ? 36 : 10)}
      >
        {'.toString(36)'}
      </Checkbox>
      <Textarea readOnly={true} value={output()} placeholder={t('global.10')} />
    </>
  )
}
