import type { VoidComponent } from 'solid-js'
import {
  AlertDialog,
  AlertDialogTitle,
  AlertDialogPanel,
  AlertDialogOverlay,
} from 'solid-headless'
import { Button } from '..'
import { useRegisterSW } from 'virtual:pwa-register/solid'

import { t } from '~/i18n'
import { channel } from '~/lib'

import * as styles from './style.css'

export const UpdateDialog: VoidComponent = () => {
  const sw = useRegisterSW()

  const updateSW = sw.updateServiceWorker
  const needRefresh = channel.fromSignal(sw.needRefresh)

  return (
    <AlertDialog isOpen={needRefresh()}>
      <AlertDialogOverlay class={styles.dialogOverlay}>
        <div class={styles.dialog}>
          <AlertDialogTitle class={styles.dialogTitle}>
            {t('global.5')}
          </AlertDialogTitle>
          <AlertDialogPanel>
            <p>{t('global.6')}</p>
            <div class={styles.buttonsContainer}>
              <Button onClick={() => updateSW(true)}>{t('global.7')}</Button>
              <Button onClick={() => needRefresh(false)}>
                {t('global.8')}
              </Button>
            </div>
          </AlertDialogPanel>
        </div>
      </AlertDialogOverlay>
    </AlertDialog>
  )
}
