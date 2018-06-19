import * as types from './mutation-types'

export const SignIn = ({ commit }, user_payload) => {
  commit(types.SIGN_IN, user_payload)
}

export const SignOut = ({ commit }) => {
  commit(types.SIGN_OUT)
}
