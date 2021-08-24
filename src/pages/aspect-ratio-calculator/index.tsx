import { createStore } from 'solid-js/store'
import { Input, InputContainer, Select } from '../../components'
import { t } from '../../i18n'
import { setTitle } from '../../helpers'

import * as styles from './style.css'

export default () => {
  setTitle(t(['aspect-ratio', 'title']))

  const [state, setState] = createStore({
    ratioWidth: 16,
    ratioHeight: 9,
    pixelsWidth: 1920,
    pixelsHeight: 1080,
  })

  const processWidth = () => {
    if (state.pixelsWidth % 1 === 0) {
      let pixelsHeight =
        (state.pixelsWidth / state.ratioWidth) * state.ratioHeight
      setState('pixelsHeight', v =>
        Number(pixelsHeight % 1 !== 0 ? pixelsHeight.toFixed(2) : pixelsHeight)
      )
    } else {
      setState('pixelsHeight', v => 0)
    }
  }

  const processHeight = () => {
    if (state.pixelsHeight % 1 === 0) {
      let pixelsWidth =
        (state.pixelsHeight / state.ratioHeight) * state.ratioWidth
      setState('pixelsWidth', v =>
        Number(pixelsWidth % 1 !== 0 ? pixelsWidth.toFixed(2) : pixelsWidth)
      )
    } else {
      setState('pixelsWidth', v => 0)
    }
  }

  return (
    <>
      <h2 class={styles.heading2}>{t(['aspect-ratio', 'title'])}</h2>
      <Select
        title={t(['aspect-ratio', 'Common Presets'])}
        id="preset"
        onChange={e => {
          const value = e.currentTarget.value

          setState('ratioWidth', v => parseInt(value.split(':')[0]))
          setState('ratioHeight', v => parseInt(value.split(':')[1]))
          processWidth()
        }}
      >
        <option class={styles.option} value="4:3">
          Old Monitor 4:3
        </option>
        <option class={styles.option} value="16:9" selected>
          Standart 16:9
        </option>
        <option class={styles.option} value="18:9">
          Wide 18:9
        </option>
        <option class={styles.option} value="21:9">
          Ultra-wide 21:9
        </option>
      </Select>
      <div class={styles.row}>
        <InputContainer>
          <Input
            type="number"
            placeholder={t(['aspect-ratio', 'Ratio Width'])}
            value={state.ratioWidth}
            onInput={e => {
              setState('ratioWidth', v => e.currentTarget.valueAsNumber)
              processWidth()
            }}
          >
            {t(['aspect-ratio', 'Ratio Width'])}
          </Input>
        </InputContainer>
        <InputContainer>
          <Input
            type="number"
            placeholder={t(['aspect-ratio', 'Ratio Height'])}
            value={state.ratioHeight}
            onInput={e => {
              setState('ratioHeight', v => e.currentTarget.valueAsNumber)
              processWidth()
            }}
          >
            {t(['aspect-ratio', 'Ratio Height'])}
          </Input>
        </InputContainer>
      </div>
      <div class={styles.row}>
        <InputContainer>
          <Input
            type="number"
            placeholder={t(['aspect-ratio', 'Pixels Width'])}
            value={state.pixelsWidth}
            onInput={e => {
              setState('pixelsWidth', v => e.currentTarget.valueAsNumber)
              processWidth()
            }}
          >
            {t(['aspect-ratio', 'Pixels Width'])}
          </Input>
        </InputContainer>
        <InputContainer>
          <Input
            type="number"
            placeholder={t(['aspect-ratio', 'Pixels Height'])}
            value={state.pixelsHeight}
            onInput={e => {
              setState('pixelsHeight', v => e.currentTarget.valueAsNumber)
              processHeight()
            }}
          >
            {t(['aspect-ratio', 'Pixels Height'])}
          </Input>
        </InputContainer>
      </div>
    </>
  )
}
