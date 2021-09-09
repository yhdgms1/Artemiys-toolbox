import * as styles from '../../styles/index.css'
import { Link } from 'solid-app-router'
import { createSignal, Show } from 'solid-js'
import clsx from 'clsx'
import { t } from '../../i18n'
import { Button, Input } from '../../components'
import { setTitle } from '../../helpers'

export default () => {
  const [shortname, setShortname] = createSignal('')
  const [error, setError] = createSignal('')
  const [data, setData] = createSignal<{ name?: string; picture?: string }>({})

  return (
    <>
      <Link class={clsx(styles.link, styles.heading2)} href="/cheap-sluts">
        {t(['t13n-id', 'go back'])}
      </Link>
      <Input
        type="text"
        placeholder={t(['cheap sluts', 'vk', 'id or shortname'])}
        spellcheck={false}
        onInput={e => setShortname(e.currentTarget.value)}
      >
        {t(['cheap sluts', 'vk', 'id or shortname'])}
      </Input>
      <Button
        onClick={async () => {
          if (!shortname()) return

          const res = await fetch(
            `https://cheap-sluts.artemis69.workers.dev/api/vk`,
            {
              method: 'POST',
              body: JSON.stringify({ id: shortname().trim() }),
            }
          )

          const data = await res.json()

          if (data?.error) {
            setError(data.error)
            setData({})
            return
          }

          setError('')

          setData(data)
        }}
      >
        {t(['cheap sluts', 'picture-vk', 'Find'])}
      </Button>
      <Show when={error() !== ''}>
        <p class={styles.text}>
          {t(['cheap sluts', 'Error'])}: {error()}
        </p>
      </Show>
      <Show when={data()?.name !== undefined}>
        {['slut', 'crime', 'gay', 'muslim', 'azerbaijan'].map(v => (
          <a
            class={clsx(styles.link, styles.margin6)}
            target="_blank"
            href={`https://cheap-sluts.pages.dev/${v}?name=${encodeURIComponent(
              data()?.name
            )}&picture=${encodeURIComponent(
              data()?.picture
            )}&download=true&width=${
              v === 'gay' || v === 'azerbaijan' ? 1920 : 411
            }&height=${v === 'gay' || v === 'azerbaijan' ? 1080 : 823}`}
          >
            {t(['cheap sluts', 'picture', 'Create'], { template: v })}
          </a>
        ))}
      </Show>
    </>
  )
}
