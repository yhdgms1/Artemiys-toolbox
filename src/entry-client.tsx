import { render } from 'solid-js/web'
import { MetaProvider } from '@solidjs/meta'
import Root from './root'

function App() {
  return (
    <MetaProvider>
      <Root />
    </MetaProvider>
  )
}

render(() => <App />, document.body)
