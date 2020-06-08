export default (user, action) => {
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
    default:
      return user
  }
}
