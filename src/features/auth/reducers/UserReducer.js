const UserReducer = (user = { isLoggedIn: false, loading: false }, action) => {
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
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

export default UserReducer
