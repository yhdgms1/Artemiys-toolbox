import * as styles from '../../styles/index.css'
import { Link } from 'solid-app-router'
import { createSignal, Show } from 'solid-js'
import clsx from 'clsx'
import { t } from '../../i18n'
import { Button, Input } from '../../components'
import { setTitle } from '../../helpers'

export default () => {
  setTitle('Remove from site')

  const [id, setId] = createSignal('')
  const [err, setErr] = createSignal('')
  const [result, setResult] = createSignal('')

  const getData = async () => {
    if (id() === '') return

    try {
      const res = await fetch(
        'https://cheap-sluts.artemis69.workers.dev/delete',
        {
          method: 'POST',
          body: JSON.stringify({ userid: id().trim() }),
        }
      )

      const data: { error?: string; userid?: string } = await res.json()

      if (data.error) {
        setResult('')
        setErr(data.error || t(['cheap sluts', 'Unexpected Error']))
        return
      }

      setErr('')
      setResult(data.userid)
    } catch (_) {
      setErr(t(['cheap sluts', 'Unexpected Error']))
    }
  }

  return (
    <>
      <Link class={clsx(styles.link, styles.heading2)} href="/cheap-sluts">
        {t(['t13n-id', 'go back'])}
      </Link>
      <div style={{ display: 'flex', 'flex-direction': 'column' }}>
        <Input
          type="text"
          placeholder={t(['cheap sluts', 'remove', 'id'])}
          onInput={e => setId(e.currentTarget.value)}
        >
          {t(['cheap sluts', 'remove', 'id'])}
        </Input>
      </div>
      <Button onClick={getData}>{t(['cheap sluts', 'Submit'])}</Button>
      <Show when={result() !== ''}>
        <p class={styles.text}>
          {t(['cheap sluts', 'remove', 'Removed Successfully'])}!
        </p>
      </Show>
      <Show when={err() !== ''}>
        <p class={styles.text}>
          {t(['cheap sluts', 'Error'])}: {err()}
        </p>
      </Show>
    </>
  )
}
