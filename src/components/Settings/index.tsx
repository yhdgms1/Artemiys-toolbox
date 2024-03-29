import type { VoidComponent } from 'solid-js'

import { createSignal } from 'solid-js'
import { t } from '~/i18n'
import { Button, ColorSchemeSwitcher, LanguageSwitcher } from '..'
import { Dialog, DialogPanel, DialogTitle, DialogOverlay } from 'solid-headless'
import { channel } from '~/lib'

import * as styles from './style.css'

const Settings: VoidComponent = () => {
  const isOpen = channel(false)

  const closeModal = () => {
    isOpen(false)
  }

  const openModal = () => {
    isOpen(true)
  }

  return (
    <>
      <button
        type="button"
        class={styles.button}
        onClick={openModal}
        aria-label={t('settings.0')}
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

      <Dialog isOpen={isOpen()} class={styles.dialog} onClose={closeModal}>
        <DialogOverlay class={styles.dialogOverlay} />
        <div class={styles.container}>
          <DialogPanel class={styles.dialogPanel}>
            <DialogTitle as="h3" class={styles.dialogTitle}>
              {t('settings.2')}
            </DialogTitle>
            <ColorSchemeSwitcher />
            <LanguageSwitcher />
            <Button onClick={closeModal}>{t('settings.1')}</Button>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  )
}

export { Settings }
