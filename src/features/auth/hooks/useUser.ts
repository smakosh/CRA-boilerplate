import { useContext } from 'react'
import { UserContext } from 'features/auth/providers/UserProvider'

const useUser = () => {
  const context = useContext(UserContext)

  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider')
  }

  return context
}

export default useUser
