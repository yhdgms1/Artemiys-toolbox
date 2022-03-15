import { createSignal, Show, For } from 'solid-js'
import { t } from '~/i18n'
import {
  Input,
  Disclosure,
  Container,
  Link,
  Paragraph,
  Checkbox,
  Select,
} from '~/components'
import { Title } from 'solid-meta'
import { createHrefUrl, templates } from '~/lib/cheap-sluts/utils'

export default () => {
  const [name, setName] = createSignal('')
  const [pic, setPic] = createSignal('')

  const [template, setTemplate] = createSignal(templates[0])

  const [useSvg, setUseSvg] = createSignal(false)

  const [width, setWidth] = createSignal(0)
  const [height, setHeight] = createSignal(0)

  const i18nKey = 'cheap sluts'

  return (
    <>
      <Link href="/cheap-sluts">{t(['t13n-id', 'go back'])}</Link>
      <Container independent={true}>
        <Input
          type="text"
          placeholder={t([i18nKey, 'manually', 'Name'])}
          spellcheck={false}
          onInput={e => setName(e.currentTarget.value)}
        >
          {t([i18nKey, 'manually', 'Name'])}
        </Input>
        <Input
          type="text"
          placeholder={t([i18nKey, 'manually', 'Picture'])}
          spellcheck={false}
          onInput={e => setPic(e.currentTarget.value)}
        >
          {t([i18nKey, 'manually', 'Picture'])}
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
      <Show
        when={name() !== '' && pic() !== ''}
        fallback={
          <Paragraph>
            {t([
              i18nKey,
              'picture',
              'Fill in the fields above to begin creating a picture',
            ])}
          </Paragraph>
        }
      >
        <Link
          small={true}
          margin={true}
          target="_blank"
          href={createHrefUrl({
            template: template(),
            name: name(),
            picture: pic(),
            width: width(),
            height: height(),
            format: useSvg() ? 'svg' : undefined,
          })}
        >
          {t([i18nKey, 'picture', 'Create'], { template: template() })}
        </Link>
      </Show>
    </>
  )
}
