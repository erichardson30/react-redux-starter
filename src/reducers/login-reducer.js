import { LOGIN_USER, LOG_OUT_USER } from '../constants';

export const login = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_USER :
      return Object.assign({}, state, {
        loggedIn: true
      })
      case LOG_OUT_USER :
      return Object.assign({}, state, {
        loggedIn: false
      })

    default:
      return state
  }
}