import { createSignal } from 'solid-js'
import * as styles from '../../styles/index.css'
import { input } from './style.css'
import { t } from '../../i18n'
import { CopyButton, Textarea, Button } from '../../components'
import clsx from 'clsx'
import { Title } from 'solid-meta'

export default () => {
  const [text, setText] = createSignal('')
  const [count, setCount] = createSignal(0)
  const [output, setOutput] = createSignal('')

  return (
    <>
      <Title>{t(['repeat something n times', 'title'])}</Title>
      <h2 class={styles.heading2}>
        {t(['repeat something n times', 'title'])}
      </h2>
      <div class={clsx(styles.text, styles.responsive_container)}>
        <label>{t(['repeat something n times', 'repeat'])}</label>
        <input
          type="text"
          placeholder={t(['repeat something n times', 'it'])}
          class={input}
          onInput={e => setText(e.currentTarget.value)}
          spellcheck={false}
        />
        <input
          type="number"
          placeholder={t(['repeat something n times', 'so many'])}
          class={input}
          onInput={e => setCount(e.currentTarget.valueAsNumber)}
          min="1"
          max="5368708"
        />
        <label>{t(['repeat something n times', 'times'])}</label>
      </div>
      <div class={styles.responsive_container}>
        <Button
          onClick={() =>
            count() <= 5368708
              ? setOutput(text().repeat(count()))
              : alert('The number is too high')
          }
        >
          {t(['repeat something n times', 'repeat'])}!
        </Button>
        <CopyButton copy={output()} />
      </div>
      <Textarea
        readOnly={true}
        value={output()}
        placeholder={t('Result will be here')}
      />
    </>
  )
}