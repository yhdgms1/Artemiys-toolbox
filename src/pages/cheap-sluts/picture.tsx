import * as styles from '../../styles/index.css'
import { Link } from 'solid-app-router'
import { createSignal, Show } from 'solid-js'
import clsx from 'clsx'
import { t } from '../../i18n'
import { Button, Input, Checkbox } from '../../components'
import { setTitle } from '../../helpers'

import { no_underline } from '../../app/style.css'

export default () => {
  const [shortname, setShortname] = createSignal('')
  const [error, setError] = createSignal('')
  const [data, setData] = createSignal({})

  return (
    <>
      <Link class={clsx(styles.link, styles.heading2)} href="/cheap-sluts">
        {t(['t13n-id', 'go back'])}
      </Link>
      <Input
        type="text"
        placeholder={t(['cheap sluts', 'vk', 'id or shortname']) + ' VK'}
        spellcheck={false}
        onInput={e => setShortname(e.currentTarget.value)}
      >
        {t(['cheap sluts', 'vk', 'id or shortname'])} VK
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
        {t(['cheap sluts', 'Submit'])}
      </Button>
      <Show when={error() !== ''}>
        <p class={styles.text}>
          {t(['cheap sluts', 'Error'])}: {error()}
        </p>
      </Show>
      <Show when={data()?.name !== undefined}>
        {['slut', 'crime', 'gay', 'muslim', 'azerbaijan'].map(v => (
          <a
            class={styles.link}
            style="margin: .6rem auto;"
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
