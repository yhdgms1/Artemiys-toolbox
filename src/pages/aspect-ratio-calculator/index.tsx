import { createState } from 'solid-js'
import { Input, Select } from '../../components'
import { t } from '../../i18n'
import { setTitle } from '../../helpers'

import * as styles from './style.css'

export default () => {
  setTitle(t(['aspect-ratio', 'title']))

  const [state, setState] = createState({
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
        pixelsHeight % 1 !== 0 ? pixelsHeight.toFixed(2) : pixelsHeight
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
        pixelsWidth % 1 !== 0 ? pixelsWidth.toFixed(2) : pixelsWidth
      )
    } else {
      setState('pixelsWidth', v => 0)
    }
  }

  return (
    <>
      <h2 class={styles.big_text}>{t(['aspect-ratio', 'title'])}</h2>
      <div class={styles.inputContainer}>
        <label for="preset" class={styles.label}>
          {t(['aspect-ratio', 'Common Presets'])}
        </label>
        <Select
          title={t(['aspect-ratio', 'Common Presets'])}
          id="preset"
          onChange={e => {
            if ((e.target as HTMLSelectElement).value !== 'custom') {
              setState(
                'ratioWidth',
                v => (e.target as HTMLSelectElement).value.split(':')[0]
              )
              setState(
                'ratioHeight',
                v => (e.target as HTMLSelectElement).value.split(':')[1]
              )
              processWidth()
            }
          }}
        >
          <option class={styles.option} value="custom">
            Custom
          </option>
          <option class={styles.option} value="4:3">
            Old Monitor 4:3
          </option>
          <option class={styles.option} value="16:9">
            Standart 16:9
          </option>
          <option class={styles.option} value="18:9">
            Wide 18:9
          </option>
          <option class={styles.option} value="21:9">
            Ultra-wide 21:9
          </option>
        </Select>
      </div>
      <div class={styles.row}>
        <div class={styles.inputContainer}>
          <label for="ratio_width" class={styles.label}>
            {t(['aspect-ratio', 'Ratio Width'])}
          </label>
          <Input
            type="number"
            placeholder={t(['aspect-ratio', 'Ratio Width'])}
            value={state.ratioWidth}
            id="ratio_width"
            onInput={e => {
              setState(
                'ratioWidth',
                v => (e.target as HTMLInputElement).valueAsNumber
              )
              processWidth()
            }}
          />
        </div>
        <div class={styles.inputContainer}>
          <label for="ratio_height" class={styles.label}>
            {t(['aspect-ratio', 'Ratio Height'])}
          </label>
          <Input
            type="number"
            placeholder={t(['aspect-ratio', 'Ratio Height'])}
            value={state.ratioHeight}
            id="ratio_height"
            onInput={e => {
              setState(
                'ratioHeight',
                v => (e.target as HTMLInputElement).valueAsNumber
              )
              processWidth()
            }}
          />
        </div>
      </div>
      <div class={styles.row}>
        <div class={styles.inputContainer}>
          <label for="pixels_width" class={styles.label}>
            {t(['aspect-ratio', 'Pixels Width'])}
          </label>
          <Input
            type="number"
            placeholder={t(['aspect-ratio', 'Pixels Width'])}
            value={state.pixelsWidth}
            id="pixels_width"
            onInput={e => {
              setState(
                'pixelsWidth',
                v => (e.target as HTMLInputElement).valueAsNumber
              )
              processWidth()
            }}
          />
        </div>
        <div class={styles.inputContainer}>
          <label for="pixels_height" class={styles.label}>
            {t(['aspect-ratio', 'Pixels Height'])}
          </label>
          <Input
            type="number"
            placeholder={t(['aspect-ratio', 'Pixels Height'])}
            value={state.pixelsHeight}
            id="pixels_height"
            onInput={e => {
              setState(
                'pixelsHeight',
                v => (e.target as HTMLInputElement).valueAsNumber
              )
              processHeight()
            }}
          />
        </div>
      </div>
    </>
  )
}
