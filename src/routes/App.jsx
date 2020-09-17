import React, { Suspense, lazy } from 'react'
import Spinner from 'react-spinkit'
import UserProvider, {
  useDispatchUser,
  useUser,
} from 'features/auth/providers/UserProvider'
import GlobalStyle from 'ui/theme/global-style'
import { ThemeProvider } from 'styled-components'
import theme from 'ui/theme/theme'

const Authenticated = lazy(() => import('./Authenticated'))
const Unauthenticated = lazy(() => import('./Unauthenticated'))

const App = () => {
  const { dispatchUser } = useDispatchUser()
  const { user } = useUser()

  return user.isLoggedIn ? (
    <Suspense fallback={<Spinner name="wandering-cubes" color="aqua" />}>
      <Authenticated isLoggedIn dispatch={dispatchUser} />
    </Suspense>
  ) : (
    <Suspense fallback={<Spinner name="wandering-cubes" color="black" />}>
      <Unauthenticated />
    </Suspense>
  )
}

export default () => (
  <ThemeProvider theme={theme}>
    <UserProvider>
      <GlobalStyle />
      <App />
    </UserProvider>
  </ThemeProvider>
)
