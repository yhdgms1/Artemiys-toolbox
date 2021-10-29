import * as styles from '../../styles/index.css'
import { Link } from 'solid-app-router'
import { createSignal, Show } from 'solid-js'
import clsx from 'clsx'
import { t } from '../../i18n'
import { Button, Input } from '../../components'
import { setTitle } from '../../helpers'

type ApiData = { error: string; userid: string; message?: string }

export default () => {
  setTitle('Remove from site')

  const [id, setId] = createSignal('')
  const [data, setData] = createSignal<ApiData>({ error: '', userid: '' })

  const getData = async () => {
    if (id() === '') return

    try {
      const response = await fetch(
        'https://cheap-sluts.artemis69.workers.dev/delete',
        {
          method: 'POST',
          body: JSON.stringify({
            userid: id().trim(),
          }),
        }
      )

      const json: ApiData = await response.json()

      if (json.message) {
        throw '500'
      }

      setData(json)
    } catch {
      setData({ error: t(['cheap sluts', 'Unexpected Error']), userid: '' })
    }
  }

  return (
    <>
      <Link class={clsx(styles.link, styles.heading2)} href="/cheap-sluts">
        {t(['t13n-id', 'go back'])}
      </Link>
      <div class={styles.flex_col}>
        <Input
          type="text"
          placeholder={t(['cheap sluts', 'remove', 'id'])}
          onInput={e => setId(e.currentTarget.value)}
        >
          {t(['cheap sluts', 'remove', 'id'])}
        </Input>
      </div>
      <Button onClick={getData}>{t(['cheap sluts', 'Submit'])}</Button>
      <p class={styles.text}>
        {data().userid !== '' &&
          t(['cheap sluts', 'remove', 'Removed Successfully']) + '!'}
        {data().error !== '' &&
          t(['cheap sluts', 'Error']) + ': ' + data().error}
      </p>
    </>
  )
}
