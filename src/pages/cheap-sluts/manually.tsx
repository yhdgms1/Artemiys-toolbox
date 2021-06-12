import * as styles from '../../styles/index.css'
import { Link } from 'solid-app-router'
import { createSignal, createState, Show } from 'solid-js'
import clsx from 'clsx'
import { t } from '../../i18n'
import { Button, Input } from '../../components'
import { setTitle } from '../../helpers'

export default () => {
  setTitle('Create Using VK')

  const [name, setName] = createSignal('')
  const [id, setId] = createSignal('')
  const [pic, setPic] = createSignal('')

  const [err, setErr] = createSignal('')
  const [result, setResult] = createSignal('')

  const getData = async () => {
    if (name() === '' || id() === '' || pic() === '') return

    try {
     
      const res = await fetch(
        'https://cheap-sluts.artemis69.workers.dev/create',
        {
          method: 'POST',
          body: JSON.stringify({ 
              name: name(),
              picture: pic(),
              userid: id()
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
      <Link class={clsx(styles.link, styles.big_text)} href="/cheap-sluts">
        {t(['t13n-id', 'go back'])}
      </Link>
      <div style={{ display: 'flex', 'flex-direction': 'column' }}>
        <Input.Label for="name">Name</Input.Label>
        <Input.default
          id="name"
          type="text"
          placeholder="Name"
          spellcheck={false}
          autocomplete={false}
          onInput={e => setName((e.target as HTMLInputElement).value)}
        />
        <Input.Label for="picture">Picture</Input.Label>
        <Input.default
          id="picture"
          type="text"
          placeholder="Picture"
          spellcheck={false}
          autocomplete={false}
          onInput={e => setPic((e.target as HTMLInputElement).value)}
        />
        <Input.Label for="id">Unique identifier</Input.Label>
        <Input.default
          id="id"
          type="text"
          placeholder="Unique identifier"
          spellcheck={false}
          autocomplete={false}
          onInput={e => setId((e.target as HTMLInputElement).value)}
        />
      </div>
      <Button onClick={getData}>Submit</Button>
      <Show when={result() !== ''}>
        <p class={styles.text}>Created Successfully!</p>
        <a
          class={styles.link}
          target="_blank"
          rel="noopener noreferer"
          href={'https://cheap-sluts.pages.dev/slut/' + result()}
        >
          Look at this
        </a>
      </Show>
      <Show when={err() !== ''}>
        <p class={styles.text}>Error: {err()}</p>
      </Show>
    </>
  )
}
