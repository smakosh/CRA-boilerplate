import React, { useReducer, useContext, createContext } from 'react'
import UserReducer from 'features/auth/reducers/UserReducer'

const UserContext = createContext()
const UserDispatchContext = createContext()

export default ({ children }) => {
  const [user, dispatch] = useReducer(UserReducer, [])

  return (
    <UserDispatchContext.Provider
      value={{
        dispatchUser: dispatch,
      }}
    >
      <UserContext.Provider
        value={{
          user,
        }}
      >
        {children}
      </UserContext.Provider>
    </UserDispatchContext.Provider>
  )
}

export const useUser = () => useContext(UserContext)
export const useDispatchUser = () => useContext(UserDispatchContext)
