// import { login, logout, getInfo } from '@/api/login'
import { login } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { getTokenByCode } from '@/api/login'
// import { getTokenByCode } from '@/api/github'
import { getInfo } from '@/api/github'

const user = {
  state: {
    id: '',
    login: '',
    ustate: '',
    auth_type: '',
    code: '',
    token: getToken(),
    name: '',
    avatar: '',
    roles: []
  },

  mutations: {
    SET_LOGIN: (state, login) => {
      state.login = login
    },
    SET_ID: (state, id) => {
      state.id = id
    },
    SET_STATE: (state, ustate) => {
      state.ustate = ustate
    },
    SET_CODE: (state, code) => {
      state.code = code
    },
    SET_AUTH_TYPE: (state, auth_type) => {
      state.auth_type = auth_type
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        login(username, userInfo.password).then(response => {
          const data = response.data
          setToken(data.token)
          commit('SET_TOKEN', data.token)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    GetInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getInfo(state.token).then(response => {
          const data = response.data
          commit('SET_NAME', data.name)
          commit('SET_AVATAR', data.avatar_url)
          commit('SET_LOGIN', data.login)
          commit('SET_ID', data.id)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // // 第三方验证登录
    LoginByThirdparty({ commit, state }, code) {
      return new Promise((resolve, reject) => {
        commit('SET_CODE', code)
        getTokenByCode(state.code).then(response => {
          commit('SET_TOKEN', response.result.token)
          setToken(response.result.token)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 登出
    LogOut({ commit, state }) {
      commit('SET_TOKEN', '')
      removeToken()
      // return new Promise((resolve, reject) => {
      //   logout(state.token).then(() => {
      //     commit('SET_TOKEN', '')
      //     commit('SET_ROLES', [])
      //     removeToken()
      //     resolve()
      //   }).catch(error => {
      //     reject(error)
      //   })
      // })
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    }
  }
}

export default user
