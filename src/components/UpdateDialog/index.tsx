import type { Component, Accessor, Setter } from 'solid-js'
import {
  AlertDialog,
  AlertDialogTitle,
  AlertDialogPanel,
  AlertDialogOverlay,
} from 'solid-headless'
import { Button } from '..'
import { useRegisterSW } from 'virtual:pwa-register/solid'

import { t } from '../../i18n'

type RegisterSWOptions = {
  immediate?: boolean
  onNeedRefresh?: () => void
  onOfflineReady?: () => void
  onRegistered?: (registration: ServiceWorkerRegistration | undefined) => void
  onRegisterError?: (error: any) => void
}

declare function useRegisterSW(options?: RegisterSWOptions): {
  needRefresh: [Accessor<boolean>, Setter<boolean>]
  offlineReady: [Accessor<boolean>, Setter<boolean>]
  updateServiceWorker: (reloadPage?: boolean) => Promise<void>
}

import * as styles from './style.css'

export const UpdateDialog: Component = () => {
  const {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(registration) {},
    onRegisterError(error) {},
  })

  return (
    <AlertDialog isOpen={needRefresh()}>
      <AlertDialogOverlay class={styles.dialogOverlay}>
        <div class={styles.dialog}>
          <AlertDialogTitle class={styles.dialogTitle}>
            {t("There's a new update available")}
          </AlertDialogTitle>
          <AlertDialogPanel>
            <p>{t('Click on reload button to update')}</p>
            <div class={styles.buttonsContainer}>
              <Button onClick={() => updateServiceWorker(true)}>
                {t('Reload')}
              </Button>
              <Button onClick={() => setNeedRefresh(false)}>
                {t('Close')}
              </Button>
            </div>
          </AlertDialogPanel>
        </div>
      </AlertDialogOverlay>
    </AlertDialog>
  )
}
