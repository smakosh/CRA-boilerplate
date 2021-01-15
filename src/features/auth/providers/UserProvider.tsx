import React, { useReducer, createContext, Reducer } from 'react'
import UserReducer, { INITIAL_STATE } from 'features/auth/reducers/UserReducer'
import type {
  DispatchUser,
  StateUser,
  UserActions,
} from 'features/auth/interfaces'
import useFetchUser from 'features/auth/hooks/useFetchUser'
import Loading from 'ui/components/Loading'

type UserProviderProps = { children: React.ReactNode }

export const UserContext = createContext<StateUser | undefined>(undefined)
export const UserDispatchContext = createContext<DispatchUser | undefined>(
  undefined
)

const UserProvider = ({ children }: UserProviderProps) => {
  const [user, dispatchUser] = useReducer<Reducer<StateUser, UserActions>>(
    UserReducer,
    INITIAL_STATE
  )
  const { loading } = useFetchUser(user, dispatchUser)

  if (!user || loading) return <Loading />

  return (
    <UserContext.Provider value={user}>
      <UserDispatchContext.Provider value={dispatchUser}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  )
}

export default UserProvider
