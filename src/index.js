import React from 'react'
import ReactDOM from 'react-dom'
import * as Sentry from '@sentry/browser'
import App from 'routes/App'
import { ENVIRONMENT, SENTRY_KEY } from 'config'

if (ENVIRONMENT !== 'development') {
  Sentry.init({
    dsn: SENTRY_KEY,
  })
}

ReactDOM.render(<App />, document.getElementById('root'))
