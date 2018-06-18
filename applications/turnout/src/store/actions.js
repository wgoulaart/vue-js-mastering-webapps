import * as types from './mutation-types'

export const SingIn = ({ commit }, user_payload) => {
  commit(types.SIGN_IN, user_payload)
}
