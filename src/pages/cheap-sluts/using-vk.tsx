import * as styles from '../../styles/index.css'
import { Link } from 'solid-app-router'
import { createSignal, Show } from 'solid-js'
import clsx from 'clsx'
import { t } from '../../i18n'
import { Button, Input } from '../../components'
import { setTitle } from '../../helpers'

export default () => {
  setTitle('Create Using VK')

  const [shortname, setShortname] = createSignal('')
  const [err, setErr] = createSignal('')
  const [result, setResult] = createSignal('')

  const getData = async () => {
    if (shortname() === '') return

    try {
      let id = shortname()
        .trim()
        .replace('https://vk.com/', '')
        .replace('http://vk.com/', '')

      if (id[id.length - 1] === '/') {
        id = id.slice(0, -1)
      }

      const res = await fetch(
        'https://cheap-sluts.artemis69.workers.dev/create/vk',
        {
          method: 'POST',
          body: JSON.stringify({ id }),
        }
      )

      const data: { error?: string; userid?: string } = await res.json()

      if (data.error === 'already added') {
        setResult(data.userid)
        setErr(data.error)
        return
      }

      if (data.error) {
        setResult('')
        setErr(data.error || t(['cheap sluts', 'Unexpected Error']))
        return
      }

      setErr('')
      setResult(data.userid)
    } catch (_) {
      setResult('')
      setErr(t(['cheap sluts', 'Unexpected Error']))
    }
  }

  return (
    <>
      <Link class={clsx(styles.link, styles.big_text)} href="/cheap-sluts">
        {t(['t13n-id', 'go back'])}
      </Link>
      <div style={{ display: 'flex', 'flex-direction': 'column' }}>
        <Input.Label for="vkid">
          {t(['cheap sluts', 'vk', 'id or shortname'])}
        </Input.Label>
        <Input.default
          id="vkid"
          type="text"
          placeholder={t(['cheap sluts', 'vk', 'id or shortname'])}
          onInput={e => setShortname((e.target as HTMLInputElement).value)}
        />
      </div>
      <Button onClick={getData}>{t(['cheap sluts', 'Submit'])}</Button>
      <Show when={result() !== ''}>
        {!err() && (
          <p class={styles.text}>
            {t(['cheap sluts', 'Created Successfully'])}!
          </p>
        )}
        <a
          class={styles.link}
          target="_blank"
          rel="noopener noreferer"
          href={'https://cheap-sluts.pages.dev/slut/' + result()}
        >
          {t(['cheap sluts', 'Look at this'])}
        </a>
      </Show>
      <Show when={err() !== ''}>
        <p class={styles.text}>
          {t(['cheap sluts', 'Error'])}: {err()}
        </p>
      </Show>
    </>
  )
}
