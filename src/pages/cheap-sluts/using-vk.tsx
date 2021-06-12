import * as styles from '../../styles/index.css'
import { Link } from 'solid-app-router'
import { createSignal, createState , Show } from 'solid-js'
import clsx from 'clsx'
import { t } from '../../i18n'
import { Button, Input } from '../../components'
import { setTitle } from '../../helpers'

export default () => {
  setTitle('Create Using VK')

  const [shortname, setShortname] = createSignal('');
  const [err, setErr] = createSignal('')
  const [result, setResult] = createSignal('')

  const getData = async () => {
    if(shortname() === '') return

    try {
      const res = await fetch('https://cheap-sluts.artemis69.workers.dev/create/vk', {
        method: 'POST',
        body: JSON.stringify({
          id: shortname().trim().replace('https://vk.com/', '').replace('http://vk.com/', '')
        })
      })

      const data: { error?: string, userid?: string } = await res.json()

      if(data.error){
        setResult('')
        setErr(data.error)
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
      <Link
        class={clsx(styles.link, styles.big_text)}
        href="/cheap-sluts"
      >
        {t(['t13n-id', 'go back'])}
      </Link>
      <div style={{ 'display': 'flex', "flex-direction": 'column' }}>
        <Input.Label for="vkid">
          id or shortname
        </Input.Label>
        <Input.default id="vkid" type="text" placeholder="id or shortname" onInput={e =>  setShortname((e.target as HTMLInputElement).value)}/>
      </div>
      <Button onClick={getData}>
        Submit
      </Button>
      <Show when={result() !== ''}>
        <p class={styles.text}>Created Successfully!</p>
        <a class={styles.link} target="_blank" rel="noopener noreferer" href={"https://cheap-sluts.pages.dev/slut/" + result() }>Look at this</a>
      </Show>
      <Show when={err() !== ''}>
        <p class={styles.text}>Error: {err()}</p>
      </Show>
    </>
  )
}
