import type { Component } from 'solid-js'
import {
  AlertDialog,
  AlertDialogTitle,
  AlertDialogPanel,
  AlertDialogOverlay,
} from 'solid-headless'
import { Button } from '..'
import { useRegisterSW } from 'virtual:pwa-register/solid'

import { t } from '~/i18n'

import * as styles from './style.css'

export const UpdateDialog: Component = () => {
  const sw = useRegisterSW()

  const { updateServiceWorker } = sw
  const [needRefresh, setNeedRefresh] = sw.needRefresh

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
