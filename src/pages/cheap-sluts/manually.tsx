import * as styles from '../../styles/index.css'
import { Link } from 'solid-app-router'
import { createSignal, Show } from 'solid-js'
import clsx from 'clsx'
import { t } from '../../i18n'
import { Button, Input } from '../../components'
import { setTitle } from '../../helpers'

export default () => {
  setTitle('Create Manually')

  const [name, setName] = createSignal('')
  const [pic, setPic] = createSignal('')

  const [err, setErr] = createSignal('')
  const [result, setResult] = createSignal('')

  const getData = async () => {
    if (name() === '' || pic() === '') return

    try {
      const res = await fetch(
        'https://cheap-sluts.artemis69.workers.dev/create',
        {
          method: 'POST',
          body: JSON.stringify({
            name: name(),
            picture: pic(),
          }),
        }
      )

      const data: { error?: string; userid?: string } = await res.json()

      if (data.error) {
        setResult('')
        setErr(data.error || 'Unexpected Error')
        return
      }

      setErr('')
      setResult(data.userid)
    } catch (_) {
      setErr('Unexpected Error')
    }
  }

  return (
    <>
      <Link class={clsx(styles.link, styles.heading2)} href="/cheap-sluts">
        {t(['t13n-id', 'go back'])}
      </Link>
      <div style={{ display: 'flex', 'flex-direction': 'column' }}>
        <Input.Label for="name">
          {t(['cheap sluts', 'manually', 'Name'])}
        </Input.Label>
        <Input.default
          id="name"
          type="text"
          placeholder={t(['cheap sluts', 'manually', 'Name'])}
          spellcheck={false}
          autocomplete="false"
          onInput={e => setName((e.target as HTMLInputElement).value)}
        />
        <Input.Label for="picture">
          {t(['cheap sluts', 'manually', 'Picture'])}
        </Input.Label>
        <Input.default
          id="picture"
          type="text"
          placeholder={t(['cheap sluts', 'manually', 'Picture'])}
          spellcheck={false}
          autocomplete="false"
          onInput={e => setPic((e.target as HTMLInputElement).value)}
        />
      </div>
      <Button onClick={getData}>{t(['cheap sluts', 'Submit'])}</Button>
      <Show when={result() !== ''}>
        <p class={styles.text}>{t(['cheap sluts', 'Created Successfully'])}!</p>
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
