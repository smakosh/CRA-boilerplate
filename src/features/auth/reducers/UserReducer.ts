import type { StateUser, UserActions } from 'features/auth/interfaces'

export const INITIAL_STATE: StateUser = {
  isLoggedIn: false,
  loading: false,
  data: null,
}

const UserReducer = (
  user: typeof INITIAL_STATE,
  action: UserActions
): StateUser => {
  switch (action.type) {
    case 'SAVE_USER':
      return {
        ...user,
        data: action.payload,
        isLoggedIn: true,
      }
    case 'LOGOUT':
      return {
        ...user,
        data: null,
        isLoggedIn: false,
      }
    case 'LOADING_TRUE':
      return {
        ...user,
        loading: true,
      }
    case 'LOADING_FALSE':
      return {
        ...user,
        loading: false,
      }
    default:
      throw new Error()
  }
}

export default UserReducer
