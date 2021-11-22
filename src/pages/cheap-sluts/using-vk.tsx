import * as styles from '../../styles/index.css'
import { Link } from 'solid-app-router'
import { createSignal, Show } from 'solid-js'
import clsx from 'clsx'
import { t } from '../../i18n'
import { Button, Input, Checkbox } from '../../components'
import { setTitle } from '../../helpers'
import { apiUrl } from './utils'

type ApiData = { error: string; userid: string }

export default () => {
  setTitle('Create Using VK')

  const [shortname, setShortname] = createSignal('')
  const [isPrivate, setIsPrivate] = createSignal(false)
  const [data, setData] = createSignal<ApiData>({ error: '', userid: '' })

  const getData = async () => {
    if (shortname() === '') return

    try {
      const response = await fetch(apiUrl + 'create/vk', {
        method: 'POST',
        body: JSON.stringify({
          id: shortname().trim(),
          private: isPrivate(),
        }),
      })

      const json: ApiData = await response.json()

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
      <div class={clsx(styles.flex_col, styles.lonely_container)}>
        <Input
          type="text"
          placeholder={t(['cheap sluts', 'vk', 'id or shortname'])}
          onInput={e => setShortname(e.currentTarget.value)}
        >
          {t(['cheap sluts', 'vk', 'id or shortname'])}
        </Input>
        <Checkbox
          onChange={e => setIsPrivate(e.currentTarget.checked)}
          id="private-check"
        >
          Private
        </Checkbox>
      </div>
      <Button onClick={getData}>{t(['cheap sluts', 'Submit'])}</Button>

      {data().error !== '' && (
        <p class={styles.text}>
          {t(['cheap sluts', 'Error'])}: {data().error}
        </p>
      )}

      {data().userid !== '' && (
        <>
          {!data().error && (
            <p class={styles.text}>
              {t(['cheap sluts', 'Created Successfully'])}!
            </p>
          )}
          <a
            class={styles.link}
            target="_blank"
            rel="noopener noreferer"
            href={'https://cheap-sluts.pages.dev/slut/' + data().userid}
          >
            {t(['cheap sluts', 'Look at this'])}
          </a>
        </>
      )}
    </>
  )
}
