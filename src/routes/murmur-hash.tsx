import { createSignal } from 'solid-js'
import { t } from '~/i18n'
import { CopyButton, Textarea, Button, Checkbox, Container } from '~/components'
import { Title } from 'solid-meta'
import * as murmurhash from 'murmurhash-es'

import * as styles from '~/styles/index.css'

export default () => {
  const [text, setText] = createSignal('')
  const [output, setOutput] = createSignal('')
  const [radix, setRadix] = createSignal(10)

  return (
    <>
      <Title>Murmur Hash</Title>
      <h2 class={styles.heading2}>Murmur Hash</h2>
      <Textarea
        placeholder={t('Enter the text here')}
        onInput={e => setText(e.currentTarget.value)}
      />
      <Container block={true} responsive={true}>
        <Button
          onClick={() =>
            setOutput(murmurhash.murmurHashV2(text()).toString(radix()))
          }
        >
          v2
        </Button>
        <Button
          onClick={() =>
            setOutput(murmurhash.murmurHashV3(text()).toString(radix()))
          }
        >
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
