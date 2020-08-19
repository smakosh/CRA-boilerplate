import React, { Suspense, lazy } from 'react'
import UserProvider, {
  useDispatchUser,
  useUser,
} from 'features/auth/providers/UserProvider'
import Theme from 'components/theme/global-style'
import useFetchUser from 'features/auth/hooks/useFetchUser'
import Spinner from 'react-spinkit'
import { ThemeProvider } from 'styled-components'
import config from 'components/theme/config'

const Authenticated = lazy(() => import('./Authenticated'))
const Unauthenticated = lazy(() => import('./Unauthenticated'))

const App = () => {
  const { dispatchUser } = useDispatchUser()
  const { user } = useUser()
  const { loading, isLoggedIn } = useFetchUser(user, dispatchUser)

  return (
    <>
      {!user || loading ? (
        <Spinner name="pacman" />
      ) : isLoggedIn ? (
        <Suspense fallback={<Spinner name="wandering-cubes" color="aqua" />}>
          <Authenticated isLoggedIn={isLoggedIn} dispatch={dispatchUser} />
        </Suspense>
      ) : (
        <Suspense fallback={<Spinner name="wandering-cubes" color="black" />}>
          <Unauthenticated />
        </Suspense>
      )}
    </>
  )
}

export default () => (
  <ThemeProvider theme={config}>
    <UserProvider>
      <Theme />
      <App />
    </UserProvider>
  </ThemeProvider>
)
