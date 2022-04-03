import { createSignal, Show, For } from 'solid-js'
import { t } from '~/i18n'
import {
  Button,
  Input,
  Disclosure,
  Container,
  Link,
  Paragraph,
  Checkbox,
  Select,
} from '~/components'
import { Title } from 'solid-meta'
import { createHrefUrl, apiUrl, templates } from '~/lib/cheap-sluts/utils'

type ApiData = {
  error?: string
  name?: string
  picture?: string
}

export default () => {
  const [shortname, setShortname] = createSignal('')
  const [data, setData] = createSignal<ApiData>({})

  const [template, setTemplate] = createSignal(templates[0])

  const [useSvg, setUseSvg] = createSignal(false)

  const [width, setWidth] = createSignal(0)
  const [height, setHeight] = createSignal(0)

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
        error: t([i18nKey, 'Unexpected Error']),
      })
    }
  }

  const i18nKey = 'cheap sluts'

  return (
    <>
      <Title>Picture VK</Title>
      <Link href="/cheap-sluts">{t(['t13n-id', 'go back'])}</Link>
      <Container independent={true}>
        <Input
          type="text"
          placeholder={t([i18nKey, 'vk', 'id or shortname'])}
          spellcheck={false}
          onInput={e => setShortname(e.currentTarget.value.trim())}
        >
          {t([i18nKey, 'vk', 'id or shortname'])}
        </Input>
        <Select
          title={t([i18nKey, 'Template'])}
          onChange={e => setTemplate(e.currentTarget.value)}
        >
          <For each={templates}>
            {tmpl => (
              <option value={tmpl} selected={template() === tmpl}>
                {tmpl.charAt(0).toUpperCase() + tmpl.slice(1)}
              </option>
            )}
          </For>
        </Select>
        <Disclosure
          buttonChildren={t([i18nKey, 'picture', 'Additional options'])}
        >
          <Input
            type="number"
            placeholder={t([i18nKey, 'picture', 'Picture width'])}
            spellcheck={false}
            onInput={e => setWidth(e.currentTarget.valueAsNumber)}
          >
            {t([i18nKey, 'picture', 'Picture width'])}
          </Input>
          <Input
            type="number"
            placeholder={t([i18nKey, 'picture', 'Picture height'])}
            spellcheck={false}
            onInput={e => setHeight(e.currentTarget.valueAsNumber)}
          >
            {t([i18nKey, 'picture', 'Picture height'])}
          </Input>
          <Checkbox
            checked={useSvg()}
            onChange={e => setUseSvg(e.currentTarget.checked)}
            id="svg-check"
          >
            {t([i18nKey, 'picture', 'Use SVG image format'])}
          </Checkbox>
        </Disclosure>
      </Container>
      <Button onClick={clickHandler}>
        {t([i18nKey, 'picture-vk', 'Find'])}
      </Button>
      <Show when={'error' in data()}>
        <Paragraph>
          {t([i18nKey, 'Error'])}: {data().error}
        </Paragraph>
      </Show>
      <Show when={'name' in data() && 'picture' in data()}>
        {(() => {
          const { name, picture } = data() as Required<NonNullable<ApiData>>

          return (
            <Link
              small={true}
              margin={true}
              target="_blank"
              href={createHrefUrl({
                template: template(),
                name,
                picture,
                width: width(),
                height: height(),
                format: useSvg() ? 'svg' : undefined,
              })}
            >
              {t([i18nKey, 'picture', 'Create'], { template: template() })}
            </Link>
          )
        })()}
      </Show>
    </>
  )
}
