import { render } from 'solid-js/web'
import { StartClient } from 'solid-start/components'
import { ColorSchemeProvider } from '~/components/ColorSchemeSwitcher/context'

const App = () => (
  <ColorSchemeProvider>
    <StartClient />
  </ColorSchemeProvider>
)

render(() => <StartClient />, document.body)
