import React from 'react'
import { Helmet } from 'react-helmet'
import ReactGA from 'react-ga'
import defaultCover from 'assets/seo/cover.png'
import {
  APP_URL,
  APP_NAME,
  GA_ANALYTICS_KEY,
  TWITTER_ACCOUNT_URL,
} from 'config'

const SEO = ({
  url,
  title = 'Boilerplate',
  description = 'description',
  cover,
}) => {
  const initializeReactGA = () => {
    ReactGA.initialize(GA_ANALYTICS_KEY)
    ReactGA.pageview(url)
  }

  if (GA_ANALYTICS_KEY) {
    initializeReactGA()
  }

  return (
    <Helmet>
      {/* TODO: Add structured data <script type="application/ld+json">{structuredData}</script> */}
      {title && (
        <title>
          {APP_NAME} | {title}
        </title>
      )}
      <meta name="description" content={description} />
      <meta property="og:title" content={title || APP_NAME} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`${APP_URL}/${url}`} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={TWITTER_ACCOUNT_URL} />
      <meta name="twitter:url" content={`${APP_URL}/${url}`} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="image" content={cover || defaultCover} />
      <meta property="og:image" content={cover || defaultCover} />
      <meta
        name="twitter:image:src"
        content={cover ? `${APP_URL}/${cover}` : defaultCover}
      />
    </Helmet>
  )
}

export default SEO
