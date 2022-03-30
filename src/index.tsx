import * as ReactDOM from 'react-dom/client'
import * as Sentry from '@sentry/browser'
import App from 'routes/App'
import { ENVIRONMENT, SENTRY_KEY } from 'config'

if (ENVIRONMENT !== 'development') {
  Sentry.init({
    dsn: SENTRY_KEY,
  })
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<App />)
