<template>
  <div class="login v2">
    <div class="wrapper">
      <div class="dialog dialog-shadow" style="display: block; margin-top: -362px;">
        <div class="title">
          <h4>请选择登录方式</h4>
        </div>
        <div v-if="loginPage" class="content">
          <ul class="common-form">
          </ul>
          <!--Github-->
          <div style="margin-top: 25px">
            <y-button text="Github登录"
                      :classStyle="'main-btn'" @btnClick="githubHandleClick('github')"
                      style="margin: 0;width: 100%;height: 48px;font-size: 18px;line-height: 48px"></y-button>
          </div>
          <!--Weixin-->
          <div style="margin-top: 25px">
            <y-button text="微信登录"
              style="margin: 0;width: 100%;height: 48px;font-size: 18px;line-height: 48px">
            </y-button>
          </div>
          <!--QQ-->
          <div style="margin-top: 25px">
            <y-button text="QQ登录"
              style="margin: 0;width: 100%;height: 48px;font-size: 18px;line-height: 48px">
            </y-button>
          </div>
          <div class="border"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SocialSign from './socialsignin'
import { getQueryObject } from '@/utils/index'
import openWindow from '@/utils/openWindow'
import YButton from './YButton'
export default {
  components: { SocialSign, YButton },
  name: 'login',
  data() {
    return {
      loginPage: true,
      loading: false,
      showDialog: false,
      thirdparty: '第三方登陆'
    }
  },
  methods: {
    githubHandleClick(thirdpart) {
      this.$store.commit('SET_AUTH_TYPE', thirdpart)
      const appid = '1eb243e826a117b3e138'
      // const redirect_uri = encodeURIComponent('http://120.132.94.141:8083/#/authredirect')
      const url = 'https://github.com/login/oauth/authorize?client_id=' + appid + '&response_type=code&state=' + new Date()
      // window.location.href = url
      openWindow(url, thirdpart, 540, 540)
    },
    returnHandleClick() {
      this.$router.push({ path: '/' })
    },
    afterQRScan() {
      const hash = window.location.hash.slice(2)
      const hashObj = getQueryObject(hash)
      const originUrl = window.location.origin
      history.replaceState({}, '', originUrl)
      const codeMap = {
        github: 'code'
        // wechat: 'code',
        // tencent: 'code'
      }
      const codeName = hashObj[codeMap[this.$store.state.user.auth_type]]
      const ustate = hashObj.sate
      this.$store.commit('SET_STATE', ustate)
      if (!codeName) {
        alert('第三方登录失败')
      } else {
        this.$store.dispatch('LoginByThirdparty', codeName, ustate).then(() => {
          this.$router.push({ path: '/' })
        })
      }
    }
  },
  created() {
    window.addEventListener('hashchange', this.afterQRScan)
  },
  destroyed() {
    window.removeEventListener('hashchange', this.afterQRScan)
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
* {
  box-sizing: content-box;
}
.login {
  overflow-x: hidden;
  overflow-y: hidden;
  .input {
    height: 50px;
    display: flex;
    align-items: center;
    input {
      font-size: 16px;
      width: 100%;
      height: 100%;
      padding: 10px 15px;
      box-sizing: border-box;
      border: 1px solid #ccc;
      border-radius: 6px;
    }
  }
  .wrapper {
    // background: url(/static/images/bg_9b9dcb65ff.png) repeat;
    background-size: 100px;
    min-height: 800px;
    min-width: 630px;
  }
}
.v2 .dialog {
  width: 450px;
  border: 1px solid #dadada;
  border-radius: 10px;
  top: 50%;
  left: 50%;
  margin-left: -225px;
  position: absolute;
  .title {
    background: linear-gradient(#fff, #f5f5f5);
    height: auto;
    overflow: visible;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
    position: relative;
    // background-image: url(/static/images/smartisan_4ada7fecea.png);
    background-size: 140px;
    background-position: top center;
    background-repeat: no-repeat;
    height: 92px;
    margin: 23px 0 50px;
    padding: 75px 0 0;
    box-shadow: none;
    h4 {
      padding: 0;
      text-align: center;
      color: #666;
      border-bottom: 1px solid #dcdcdc;
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      box-shadow: none;
      font-weight: 700;
      position: absolute;
      bottom: 0;
      width: 100%;
      text-align: center;
      margin: 0;
      padding: 0;
      border-bottom: 0;
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      box-shadow: none;
      line-height: 1em;
      height: auto;
      color: #333;
      font-weight: 400;
    }
  }
  .content {
    padding: 0 40px 22px;
    height: auto;
    .common-form {
      li {
        clear: both;
        margin-bottom: 15px;
        position: relative;
      }
    }
  }
}
.dialog-shadow,
.v2 .bbs .dialog-shadow,
.v2 .dialog-shadow {
  -webkit-box-shadow: 0 9px 30px -6px rgba(0, 0, 0, 0.2),
    0 18px 20px -10px rgba(0, 0, 0, 0.04), 0 18px 20px -10px rgba(0, 0, 0, 0.04),
    0 10px 20px -10px rgba(0, 0, 0, 0.04);
  -moz-box-shadow: 0 9px 30px -6px rgba(0, 0, 0, 0.2),
    0 18px 20px -10px rgba(0, 0, 0, 0.04), 0 18px 20px -10px rgba(0, 0, 0, 0.04),
    0 10px 20px -10px rgba(0, 0, 0, 0.04);
  box-shadow: 0 9px 30px -6px rgba(0, 0, 0, 0.2),
    0 18px 20px -10px rgba(0, 0, 0, 0.04), 0 18px 20px -10px rgba(0, 0, 0, 0.04),
    0 10px 20px -10px rgba(0, 0, 0, 0.04);
}
@media screen and (min-width: 737px),
  screen and (-webkit-max-device-pixel-ratio: 1.9) and (max-width: 736px) and (min-device-width: 737px) {
  .wrapper {
    // background: url(/static/images/con-bg_04f25dbf8e.jpg) repeat-x;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .dialog {
    // background: url(/static/images/dialog-gray-bg.png) #fff bottom repeat-x;
    border-radius: 12px;
    display: none;
    margin: -163px 0 0 -218px;
    width: 436px;
    position: fixed;
    left: 50%;
    top: 50%;
  }
  .dialog .title h4 {
    border-bottom: #d1d1d1 solid 1px;
    box-shadow: 0 2px 6px #d1d1d1;
    color: #666;
    font-size: 20px;
    height: 61px;
    line-height: 61px;
    padding: 0 0 0 35px;
  }
  .common-form li {
    clear: both;
    margin-bottom: 15px;
    position: relative;
  }
  .auto-login {
    position: absolute;
    top: 0px;
    left: 2px;
    color: #999;
  }
  .register {
    padding: 1px 10px 0;
    border-right: 1px solid #ccc;
  }
  .border {
    margin-top: 10px;
    border-bottom: 1px solid #ccc;
  }
  .other {
    margin: 20px 5px 0 0;
    width: auto;
    color: #bbb;
    font-size: 12px;
    cursor: default;
    color: #999;
  }
  .footer {
    display: flex;
    flex-direction: row;
  }
  .agree {
    margin-bottom: 30px;
    color: #999;
  }
}
.registered {
  h4 {
    padding: 0;
    text-align: center;
    color: #666;
    border-bottom: 1px solid #dcdcdc;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    font-weight: 700;
    font-size: 20px;
    height: 60px;
    line-height: 60px;
  }
}
#wait {
  text-align: left;
  color: #999;
  margin: 0;
}
</style>
