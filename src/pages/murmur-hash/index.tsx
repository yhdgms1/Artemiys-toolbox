import { createSignal } from 'solid-js'
import { t } from '../../i18n'
import { CopyButton, Textarea, Button, Checkbox } from '../../components'
import { setTitle } from '../../helpers'
import * as murmurhash from 'murmurhash-es'

import * as styles from '../../styles/index.css'

export default () => {
  setTitle('Murmur Hash')

  const [text, setText] = createSignal('')
  const [output, setOutput] = createSignal('')
  const [radix, setRadix] = createSignal(10)

  return (
    <>
      <h2 class={styles.heading2}>Murmur Hash</h2>
      <Textarea
        placeholder={t('Enter the text here')}
        onInput={e => setText(e.currentTarget.value)}
      />
      <div class={styles.responsive_container}>
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
      </div>
      <Checkbox
        checked={radix() === 36}
        onChange={e => setRadix(e.currentTarget.checked ? 36 : 10)}
        id="private-check"
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
