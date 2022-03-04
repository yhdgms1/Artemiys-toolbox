import { ApiResponse } from '~/lib/cheap-sluts/types'
import { createSignal, Show } from 'solid-js'
import clsx from 'clsx'
import { t } from '~/i18n'
import { Button, Input, Container, Link } from '~/components'
import { Title } from 'solid-meta'

import { apiUrl } from '~/lib/cheap-sluts/utils'
import * as styles from '~/styles/index.css'

export default () => {
  const [id, setId] = createSignal('')
  const [data, setData] = createSignal<ApiResponse>({})

  const getData = async () => {
    if (id() === '') return

    try {
      const response = await fetch(apiUrl + 'delete', {
        method: 'POST',
        body: JSON.stringify({
          userid: id(),
        }),
      })

      const json: ApiResponse = await response.json()

      setData(json)
    } catch {
      setData({ error: t(['cheap sluts', 'Unexpected Error']) })
    }
  }

  return (
    <>
      <Title>Remove from site</Title>
      <Link href="/cheap-sluts">{t(['t13n-id', 'go back'])}</Link>
      <Container independent={true}>
        <Input
          type="text"
          placeholder={t(['cheap sluts', 'remove', 'id'])}
          onInput={e => setId(e.currentTarget.value.trim())}
        >
          {t(['cheap sluts', 'remove', 'id'])}
        </Input>
      </Container>
      <Button onClick={getData}>{t(['cheap sluts', 'Submit'])}</Button>
      <p class={styles.text}>
        <Show when={data().userid}>
          {t(['cheap sluts', 'remove', 'Removed Successfully']) + '!'}
        </Show>
        <Show when={data().error}>
          {t(['cheap sluts', 'Error']) + ': ' + data().error}
        </Show>
      </p>
    </>
  )
}
