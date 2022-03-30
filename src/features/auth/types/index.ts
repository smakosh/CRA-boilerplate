export type UserActions =
  | { type: 'SAVE_USER'; payload: StateUser }
  | { type: 'LOGOUT' }
  | { type: 'LOADING_TRUE' }
  | { type: 'LOADING_FALSE' }

export type StateUser = {
  isLoggedIn: boolean
  loading: boolean
  data: any // Type it as your returned user data from your API
}

export type DispatchUser = (action: UserActions) => void
