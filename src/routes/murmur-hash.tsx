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
import { Title } from 'solid-meta'
import { murmurHashV2 as v2, murmurHashV3 as v3 } from 'murmurhash-es'

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
        placeholder={t('Enter the text here')}
        onInput={e => setText(e.currentTarget.value)}
      />
      <Container block={true} responsive={true}>
        <Button onClick={() => setOutput(v2(text()).toString(radix()))}>
          v2
        </Button>
        <Button onClick={() => setOutput(v3(text()).toString(radix()))}>
          v3
        </Button>
        <CopyButton copy={output()} />
      </Container>
      <Checkbox
        checked={radix() === 36}
        onChange={e => setRadix(e.currentTarget.checked ? 36 : 10)}
        id="radix-check"
      >
        {'.toString(36)'}
      </Checkbox>
      <Textarea
        readOnly={true}
        value={output()}
        placeholder={t('Result will be here')}
      />
    </>
  )
}
