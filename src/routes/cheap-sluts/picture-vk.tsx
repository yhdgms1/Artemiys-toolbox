import { Link } from 'solid-app-router'
import { createSignal, Show, For } from 'solid-js'
import clsx from 'clsx'
import { t } from '~/i18n'
import { Button, Input, Disclosure, Container } from '~/components'
import { Title } from 'solid-meta'
import { createHrefUrl, apiUrl } from '~/lib/cheap-sluts/utils'

import * as styles from '~/styles/index.css'

type ApiData = {
  error?: string
  name?: string
  picture?: string
}

export default () => {
  const [shortname, setShortname] = createSignal('')
  const [data, setData] = createSignal<ApiData>({})

  const [width, setWidth] = createSignal(0)
  const [height, setHeight] = createSignal(0)

  const renderers = [
    'slut',
    'crime',
    'gay',
    'muslim',
    'azerbaijan',
    'mom',
    'svinoros',
  ]

  const clickHandler = async () => {
    if (!shortname()) return

    try {
      const response = await fetch(apiUrl + 'vk/info', {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({ id: shortname() }),
      })

      const json: ApiData = await response.json()

      setData(json)
    } catch (error) {
      setData({
        error: t(['cheap sluts', 'Unexpected Error']),
      })
    }
  }

  return (
    <>
      <Link class={clsx(styles.link, styles.heading2)} href="/cheap-sluts">
        {t(['t13n-id', 'go back'])}
      </Link>
      <Container independent={true}>
        <Input
          type="text"
          placeholder={t(['cheap sluts', 'vk', 'id or shortname'])}
          spellcheck={false}
          onInput={e => setShortname(e.currentTarget.value.trim())}
        >
          {t(['cheap sluts', 'vk', 'id or shortname'])}
        </Input>
        <Disclosure
          buttonChildren={t(['cheap sluts', 'picture', 'Additional options'])}
        >
          <Input
            type="number"
            placeholder={t(['cheap sluts', 'picture', 'Picture width'])}
            spellcheck={false}
            onInput={e => setWidth(e.currentTarget.valueAsNumber)}
          >
            {t(['cheap sluts', 'picture', 'Picture width'])}
          </Input>
          <Input
            type="number"
            placeholder={t(['cheap sluts', 'picture', 'Picture height'])}
            spellcheck={false}
            onInput={e => setHeight(e.currentTarget.valueAsNumber)}
          >
            {t(['cheap sluts', 'picture', 'Picture height'])}
          </Input>
        </Disclosure>
      </Container>
      <Button onClick={clickHandler}>
        {t(['cheap sluts', 'picture-vk', 'Find'])}
      </Button>
      <Show when={data().error}>
        <p class={styles.text}>
          {t(['cheap sluts', 'Error'])}: {data().error}
        </p>
      </Show>
      <Show when={'name' in data() && 'picture' in data()}>
        <For each={renderers}>
          {template => (
            <a
              class={clsx(styles.link, styles.margin6)}
              target="_blank"
              href={createHrefUrl(
                template,
                //@ts-ignore
                data().name,
                data().picture,
                width(),
                height()
              )}
            >
              {t(['cheap sluts', 'picture', 'Create'], { template })}
            </a>
          )}
        </For>
      </Show>
    </>
  )
}
