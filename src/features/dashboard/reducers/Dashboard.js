export default (users = { loading: false }, action) => {
  switch (action.type) {
    case 'FETCH_USERS':
      return {
        ...users,
        data: action.payload,
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
      return user
  }
}
