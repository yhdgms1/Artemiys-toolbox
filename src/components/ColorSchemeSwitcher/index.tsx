import * as styles from './style.css'
import { createSignal, useContext } from 'solid-js'
import { t } from '../../i18n'
import { useColorScheme } from './context'
import { Button, Radio } from '..'

import {
  TailwindDialog,
  TailwindDialogPanel,
  TailwindDialogTitle,
  TailwindDialogOverlay,
} from 'solid-headless'

export function ColorSchemeSwitcher() {
  const [isOpen, setIsOpen] = createSignal(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const [scheme, , { setDarkTheme, setLightTheme, setAutoTheme }] =
    useColorScheme()

  return (
    <>
      <button
        type="button"
        class={styles.button}
        onClick={openModal}
        aria-label="Open settings dialog"
      >
        <svg width="24" height="24" fill="none">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M13.12 5.613a1 1 0 0 0-.991-.863h-.258a1 1 0 0 0-.99.863l-.087.632c-.056.403-.354.724-.732.874a5.225 5.225 0 0 0-.167.07c-.373.163-.81.15-1.136-.095l-.308-.23a1 1 0 0 0-1.307.092l-.188.188a1 1 0 0 0-.092 1.307l.23.308c.244.325.258.763.095 1.136a5.225 5.225 0 0 0-.07.167c-.15.378-.47.676-.874.732l-.632.087a1 1 0 0 0-.863.99v.258a1 1 0 0 0 .863.99l.632.087c.403.056.724.354.874.732l.07.167c.163.373.15.81-.095 1.136l-.23.308a1 1 0 0 0 .092 1.307l.188.188a1 1 0 0 0 1.307.093l.308-.231c.325-.244.763-.258 1.136-.095a5.4 5.4 0 0 0 .167.07c.378.15.676.47.732.874l.087.632a1 1 0 0 0 .99.863h.258a1 1 0 0 0 .99-.863l.087-.632c.056-.403.354-.724.732-.874a5.12 5.12 0 0 0 .167-.07c.373-.163.81-.15 1.136.095l.308.23a1 1 0 0 0 1.307-.092l.188-.188a1 1 0 0 0 .093-1.307l-.231-.308c-.244-.325-.258-.763-.095-1.136l.07-.167c.15-.378.47-.676.874-.732l.632-.087a1 1 0 0 0 .863-.99v-.258a1 1 0 0 0-.863-.99l-.632-.087c-.403-.056-.724-.354-.874-.732a5.168 5.168 0 0 0-.07-.167c-.163-.373-.15-.81.095-1.136l.23-.308a1 1 0 0 0-.092-1.307l-.188-.188a1 1 0 0 0-1.307-.092l-.308.23c-.325.244-.763.258-1.136.095a5.185 5.185 0 0 0-.167-.07c-.378-.15-.676-.47-.732-.874l-.087-.632Z"
          />
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M13.25 12a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z"
          />
        </svg>
      </button>

      {isOpen() && (
        <TailwindDialog
          defaultOpen
          isOpen={isOpen()}
          class={styles.dialog}
          onClose={closeModal}
        >
          <TailwindDialogOverlay class={styles.dialogOverlay} />
          <div class={styles.container}>
            <TailwindDialogPanel class={styles.dialogPanel}>
              <TailwindDialogTitle as="h3" class={styles.dialogTitle}>
                {t(['color scheme switcher', 'Settings'])}
              </TailwindDialogTitle>
              <fieldset class={styles.fieldset}>
                <legend class={styles.legend}>
                  {t(['color scheme switcher', 'Scheme'])}
                </legend>
                <Radio
                  id="light-theme-radio"
                  name="color-scheme"
                  checked={scheme() === 'light'}
                  onChange={setLightTheme}
                >
                  {t(['color scheme switcher', 'Light'])}
                </Radio>
                <Radio
                  id="auto-theme-radio"
                  name="color-scheme"
                  checked={scheme() === 'auto'}
                  onChange={setAutoTheme}
                >
                  {t(['color scheme switcher', 'System'])}
                </Radio>
                <Radio
                  id="dark-theme-radio"
                  name="color-scheme"
                  checked={scheme() === 'dark'}
                  onChange={setDarkTheme}
                >
                  {t(['color scheme switcher', 'Dark'])}
                </Radio>
              </fieldset>
              <Button onClick={closeModal} type="button">
                {t(['color scheme switcher', 'Close'])}
              </Button>
            </TailwindDialogPanel>
          </div>
        </TailwindDialog>
      )}
    </>
  )
}
