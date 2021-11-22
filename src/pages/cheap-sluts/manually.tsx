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
  setTitle('Create Manually')

  const [name, setName] = createSignal('')
  const [pic, setPic] = createSignal('')
  const [isPrivate, setIsPrivate] = createSignal(false)

  const [data, setData] = createSignal<ApiData>({ error: '', userid: '' })

  const getData = async () => {
    if (name() === '' || pic() === '') return

    try {
      const response = await fetch(apiUrl + 'create', {
        method: 'POST',
        body: JSON.stringify({
          name: name(),
          picture: pic(),
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
          placeholder={t(['cheap sluts', 'manually', 'Name'])}
          spellcheck={false}
          onInput={e => setName(e.currentTarget.value)}
        >
          {t(['cheap sluts', 'manually', 'Name'])}
        </Input>
        <Input
          type="text"
          placeholder={t(['cheap sluts', 'manually', 'Picture'])}
          spellcheck={false}
          onInput={e => setPic(e.currentTarget.value)}
        >
          {t(['cheap sluts', 'manually', 'Picture'])}
        </Input>
        <Checkbox
          onChange={e => setIsPrivate(e.currentTarget.checked)}
          id="private-check"
        >
          Private
        </Checkbox>
      </div>
      <Button onClick={getData}>{t(['cheap sluts', 'Submit'])}</Button>
      {data().userid !== '' && (
        <>
          <p class={styles.text}>
            {t(['cheap sluts', 'Created Successfully'])}!
          </p>
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
      {data().error !== '' && (
        <p class={styles.text}>
          {t(['cheap sluts', 'Error'])}: {data().error}
        </p>
      )}
    </>
  )
}
