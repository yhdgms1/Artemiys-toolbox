import { createSignal } from 'solid-js'
import * as styles from '../../styles/index.css'
import { t } from '../../i18n'
import { CopyButton, Textarea, Button } from '../../components'
import clsx from 'clsx'
import { setTitle } from '../../helpers'

export default function () {
  setTitle('Repeat Something')

  const [text, setText] = createSignal('')
  const [count, setCount] = createSignal(0)
  const [output, setOutput] = createSignal('')

  return (
    <>
      <div class={clsx(styles.text, styles.responsive_container)}>
        <label>{t(['repeat-it-n-times', 'repeat'])}</label>
        <input
          type="text"
          placeholder={t(['repeat-it-n-times', 'it'])}
          class={styles.input}
          onInput={e => setText((e.target as HTMLInputElement).value)}
          spellcheck={false}
        />
        <input
          type="number"
          placeholder={t(['repeat-it-n-times', 'so many'])}
          class={styles.input}
          onInput={e => setCount((e.target as HTMLInputElement).valueAsNumber)}
          min="1"
          max="5368708"
        />
        <label>{t(['repeat-it-n-times', 'times'])}</label>
      </div>
      <div class={styles.responsive_container}>
        <Button
          onClick={() =>
            count() <= 5368708
              ? setOutput(text().repeat(count()))
              : alert('The number is too high')
          }
        >
          {t(['repeat-it-n-times', 'repeat'])}!
        </Button>
        <CopyButton copy={output()} />
      </div>
      <Textarea
        readonly
        value={output()}
        placeholder={t(['repeat-it-n-times', 'result'])}
        aria-placeholder={t(['repeat-it-n-times', 'result'])}
      />
    </>
  )
}
