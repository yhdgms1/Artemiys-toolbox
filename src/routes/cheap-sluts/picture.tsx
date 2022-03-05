import { createSignal, Show, For } from 'solid-js'
import { t } from '~/i18n'
import { Input, Disclosure, Container, Link, Paragraph } from '~/components'
import { Title } from 'solid-meta'
import { createHrefUrl } from '~/lib/cheap-sluts/utils'

export default () => {
  const [name, setName] = createSignal('')
  const [pic, setPic] = createSignal('')

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

  return (
    <>
      <Link href="/cheap-sluts">{t(['t13n-id', 'go back'])}</Link>
      <Container independent={true}>
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
      <Show
        when={name() !== '' && pic() !== ''}
        fallback={
          <Paragraph>
            {t([
              'cheap sluts',
              'picture',
              'Fill in the fields above to begin creating a picture',
            ])}
          </Paragraph>
        }
      >
        <For each={renderers}>
          {template => (
            <Link
              small={true}
              margin={true}
              target="_blank"
              href={createHrefUrl(template, name(), pic(), width(), height())}
            >
              {t(['cheap sluts', 'picture', 'Create'], { template })}
            </Link>
          )}
        </For>
      </Show>
    </>
  )
}
