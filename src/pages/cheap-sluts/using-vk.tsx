import * as styles from '../../styles/index.css'
import { Link } from 'solid-app-router'
import { createSignal, Show } from 'solid-js'
import clsx from 'clsx'
import { t } from '../../i18n'
import { Button, Input, Checkbox } from '../../components'
import { setTitle } from '../../helpers'

export default () => {
  setTitle('Create Using VK')

  const [shortname, setShortname] = createSignal('')
  const [err, setErr] = createSignal('')
  const [result, setResult] = createSignal('')
  const [isPrivate, setIsPrivate] = createSignal(false)

  const getData = async () => {
    if (shortname() === '') return

    try {
      const res = await fetch(
        'https://cheap-sluts.artemis69.workers.dev/create/vk',
        {
          method: 'POST',
          body: JSON.stringify({
            id: shortname().trim(),
            private: isPrivate(),
          }),
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
      <Link class={clsx(styles.link, styles.heading2)} href="/cheap-sluts">
        {t(['t13n-id', 'go back'])}
      </Link>
      <div class={styles.flex_col}>
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
