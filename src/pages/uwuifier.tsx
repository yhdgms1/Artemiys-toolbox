import type { Component } from 'solid-js'
import Uwuifier from 'uwuifier'
import { createSignal } from 'solid-js'
import * as styles from '../styles/shared'
import { t } from '../i18n'
import CopyBtn from '../components/ButtonCopy'
import { Title } from '../components/Title'

export default function (): Component {
  const uwuifier = new Uwuifier()

  const [output, setOutput] = createSignal('')

  return (
    <>
      <Title>
        Uwuifier
      </Title>
      <textarea
        class={styles.textarea}
        placeholder={t(['uwuifier', 'input'])}
        aria-placeholder={t(['uwuifier', 'input'])}
        onInput={e => setOutput(uwuifier.uwuifySentence(e.target.value))}
      />
      <CopyBtn copy={output()} />
      <textarea
        readonly
        class={styles.textarea}
        value={output()}
        placeholder={t(['uwuifier', 'output'])}
        aria-placeholder={t(['uwuifier', 'output'])}
      />
    </>
  )
}
