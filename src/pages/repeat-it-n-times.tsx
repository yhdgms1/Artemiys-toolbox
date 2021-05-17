import type { Component } from 'solid-js'
import { createSignal } from 'solid-js'
import * as styles from '../styles/shared'
import { useI18n } from '../solid-i18n';

export default function (): Component {
  const [t] = useI18n()
  const [text, setText] = createSignal('')
  const [count, setCount] = createSignal(0)
  const [output, setOutput] = createSignal('')
  const [copyButtonContent, setCopyButtonContent] = createSignal(t('repeatItSomeTimes.button_copy', null, 'Copy!'))

  return (
    <>
      <div class={`${styles.text} ${styles.responsive_container}`}>
        <label for="repeat">{t('repeatItSomeTimes.repeat', null, 'Repeat')}</label>
        <input
          type="text"
          id="repeat"
          name="repeat"
          placeholder={t('repeatItSomeTimes.repeat_it', null, 'it')}
          class={styles.input}
          onInput={e => setText(e.target.value)}
          spellcheck="false"
        />
        <input
          type="number"
          id="times"
          name="times"
          placeholder={t('repeatItSomeTimes.repeat_so_many', null, 'so many')}
          class={styles.input}
          onInput={e => setCount(e.target.valueAsNumber)}
          min="1"
          max="5368708"
        />
        <label for="times">{t('repeatItSomeTimes.times', null, 'times')}</label>
      </div>
      <div class={styles.responsive_container}>
        <button
          type="button"
          class={styles.button}
          onClick={() =>
            count() <= 5368708
              ? setOutput(text().repeat(count()))
              : alert('The number of reps is too high')
          }
        >
          {t('repeatItSomeTimes.repeat', null, 'Repeat') + '!'}
        </button>
        <button
          type="button"
          class={styles.button}
          onClick={() => {
            navigator.clipboard.writeText(output()).then(() => {
              setCopyButtonContent(t('repeatItSomeTimes.button_copy_active', null, 'Copy!'))
              const timeout = setTimeout(() => {
                setCopyButtonContent(t('repeatItSomeTimes.button_copy', null, 'Copy!'))
                clearTimeout(timeout)
              }, 750)
            })
          }}
        >
          {copyButtonContent()}
        </button>
      </div>
      <textarea
        readonly
        class={styles.textarea}
        value={output()}
        placeholder={t('repeatItSomeTimes.result', null, 'Result will be here')}
        aria-placeholder={t('repeatItSomeTimes.result', null, 'Result will be here')}
      />
    </>
  )
}
