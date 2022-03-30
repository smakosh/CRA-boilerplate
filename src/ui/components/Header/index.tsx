import { NavLink, Link, useNavigate } from 'react-router-dom'
import Button from 'ui/components/Button'
import Container from 'ui/components/Container'
import Logo from 'ui/components/Logo'
import useUser from 'features/auth/hooks/useUser'
import useDispatchUser from 'features/auth/hooks/useDispatchUser'
import { logout } from 'features/auth/actions'
import { Wrapper, Flex, Links } from './styles'

const Header = () => {
  const dispatchUser = useDispatchUser()
  const user = useUser()
  const navigate = useNavigate()

  return (
    <Wrapper>
      <Flex as={Container}>
        <Link to="/">
          <Logo />
        </Link>
        <Links>
          {user.isLoggedIn ? (
            <Button
              type="button"
              onClick={() => logout(dispatchUser, navigate)}
              size="large"
              variant="secondary"
            >
              Logout
            </Button>
          ) : (
            <>
              <NavLink
                className={(navData) => (navData.isActive ? 'active' : '')}
                to="/"
              >
                Login
              </NavLink>
              <NavLink
                className={(navData) => (navData.isActive ? 'active' : '')}
                to="/signup"
              >
                <Button as="a" size="large" variant="primary">
                  Sign up
                </Button>
              </NavLink>
            </>
          )}
        </Links>
      </Flex>
    </Wrapper>
  )
}

export default Header
