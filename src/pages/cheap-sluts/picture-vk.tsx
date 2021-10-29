import * as styles from '../../styles/index.css'
import { Link } from 'solid-app-router'
import { createSignal, Show } from 'solid-js'
import clsx from 'clsx'
import { t } from '../../i18n'
import { Button, Input } from '../../components'
import { setTitle } from '../../helpers'
import { createHrefUrl } from './utils'

type ApiData = { error: string; name: string; picture: string }

export default () => {
  const [shortname, setShortname] = createSignal('')
  const [data, setData] = createSignal<ApiData>({
    error: '',
    name: '',
    picture: '',
  })

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

          const response = await fetch(
            `https://cheap-sluts.artemis69.workers.dev/api/vk`,
            {
              method: 'POST',
              body: JSON.stringify({ id: shortname().trim() }),
            }
          )

          const json: ApiData = await response.json()

          setData(json)
        }}
      >
        {t(['cheap sluts', 'picture-vk', 'Find'])}
      </Button>
      {data().error !== '' && (
        <p class={styles.text}>
          {t(['cheap sluts', 'Error'])}: {data().error}
        </p>
      )}
      {!!(data().name && data().picture) &&
        ['slut', 'crime', 'gay', 'muslim', 'azerbaijan'].map(template => (
          <a
            class={clsx(styles.link, styles.margin6)}
            target="_blank"
            href={createHrefUrl(template, data().name, data().picture)}
          >
            {t(['cheap sluts', 'picture', 'Create'], { template })}
          </a>
        ))}
    </>
  )
}
