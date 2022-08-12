import { render } from 'solid-js/web'
import { MetaProvider } from '@solidjs/meta'
import { Router } from '@solidjs/router'
import Root from './root'

function App() {
  return (
    <MetaProvider>
      <Router>
        <Root />
      </Router>
    </MetaProvider>
  )
}

render(() => <App />, document.body)
