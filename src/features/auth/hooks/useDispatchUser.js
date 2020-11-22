import { useContext } from 'react'
import { UserDispatchContext } from 'features/auth/providers/UserProvider'

const useDispatchUser = () => {
  const context = useContext(UserDispatchContext)

  if (context === undefined) {
    throw new Error('useDispatchUser must be used within a UserProvider')
  }

  return context
}

export default useDispatchUser
