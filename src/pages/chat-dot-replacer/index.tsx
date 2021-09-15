import { createSignal } from 'solid-js'
import * as styles from '../../styles/index.css'
import { t } from '../../i18n'
import { Button, CopyButton, Textarea } from '../../components'
import { setTitle } from '../../helpers'

export default () => {
  setTitle(t(['chat-dot-replacer', 'title']))

  const [input, setInput] = createSignal('')
  const [output, setOutput] = createSignal('')

  return (
    <>
      <h2 class={styles.heading2}>{t(['chat-dot-replacer', 'title'])}</h2>
      <Textarea
        placeholder={t(['chat-dot-replacer', 'Type text'])}
        onInput={e => setInput(e.currentTarget.value)}
      />
      <div class={styles.responsive_container}>
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
      </div>
      <Textarea
        readOnly={true}
        value={output()}
        placeholder={t(['chat-dot-replacer', 'Result'])}
      />
    </>
  )
}
