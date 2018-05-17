<template>
   <div id="root">
      <div class="main">
        <div class="main-penal">
          <div class="main-penal-content">
            <div class="main-penal-content-head">
              <div class="main-penal-content-head-text">创建课程</div>
            </div>
            <div class="main-penal-content-mid">
              <div class="main-penal-content-mid-left">
                <div class="main-penal-content-mid-left-content">
                  <el-form class="form-container" :model="postForm" :rules="rules" ref="postForm">
                    <el-form-item style="margin-bottom: 40px;" label-width="45px" label="名称:">
                      <el-input type="input" :rows="1" autosize placeholder="请输入内容" v-model="postForm.content_name">
                      </el-input>
                    </el-form-item>
                    <el-form-item style="margin-bottom: 40px;" label-width="45px" label="简介:">
                    <el-input type="textarea" :rows="3" height="30px" placeholder="请输入内容" v-model="postForm.content_short">
                    </el-input>
                    </el-form-item>
                  </el-form>
                </div>
              </div>
              <div class="main-penal-content-mid-right"></div>
            </div>
            <div class="main-penal-content-footer">
              <div class="main-penal-content-footer-content">
                <div class="main-penal-content-footer-content-left">
                  <el-button type="info">取消</el-button>
                </div>
                <div class="main-penal-content-footer-content-right">
                  <el-button v-loading="loading" type="primary"  @click="submitForm()">创建</el-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   </div>
</template>

<script>
  import { Button } from 'element-ui'
  import ElButton from 'element-ui/packages/button/src/button'
  import { create } from '@/api/course'
  const defaultForm = {
    id: '', //
    content_name: '', // 名称
    content_short: '' // 简介
  }
  export default {
    components: {
      ElButton,
      Button
    },
    data() {
      const validateRequire = (rule, value, callback) => {
        if (value === '') {
          this.$message({
            message: rule.field + '为必传项',
            type: 'error'
          })
          callback(null)
        } else {
          callback()
        }
      }
      return {
        postForm: Object.assign({}, defaultForm),
        rules: {
          content: [{ validator: validateRequire }]
        },
        loading: false
      }
    },
    name: 'new',
    methods: {
      submitForm() {
        console.log(this.postForm)
        this.$refs.postForm.validate(valid => {
          if (valid) {
            this.loading = true
            this.$store.dispatch('createNewCourse', this.postForm).then(() => {
              this.loading = false
              this.$router.push({ path: '/' })
            }).catch(() => {
              this.loading = false
            })
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      createNewCourse({ commit }, course) {
        const courseName = course.trim()
        return new Promise((resolve, reject) => {
          create(courseName, this.$state.id).then(response => {
            resolve()
          })
        }
        )
      }
    },
    created() {
      this.postForm = Object.assign({}, defaultForm)
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss"  scoped>
  #root {
    width: 100%;
    height: 100%;
  }
  .main {
    -webkit-box-direction: normal;
    -webkit-box-orient: vertical;
    margin: 0px;
    padding: 0px;
    width: 100%;
    min-height: 100vh;
    color: #242A31;
    background: #f5f7f9;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    .main-penal {
      -webkit-box-direction: normal;
      -webkit-box-orient: vertical;
      margin: 0px;
      padding: 0px;
      margin-top: 32px;
      margin-bottom: 32px;
      -webkit-flex: 1;
      -ms-flex: 1;
      flex: 1;
      display: -webkit-box;
      display: -moz-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      pointer-events: none;
      .main-penal-content {
        -webkit-box-align: stretch;
        -webkit-box-direction: normal;
        -webkit-box-orient: vertical;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        align-content: center;
        width: 100%;
        pointer-events: auto;
        box-shadow: rgba(116, 129, 141, 0.1) 0px 1px 1px 0px;
        max-width: 800px;
        padding: 0px;
        margin: auto;
        background: rgb(255, 255, 255);
        border-radius: 4px;
        border-width: 1px;
        border-style: solid;
        border-color: rgb(212, 218, 223);
        border-image: initial;
        overflow: hidden;
        .main-penal-content-head {
          display: block;
          padding-top: 32px;
          padding-bottom: 32px;
          padding-right: 40px;
          padding-left: 40px;
          color: rgb(255, 255, 255);
          margin: 0px;
          background: rgb(56, 132, 255);
          .main-penal-content-head-text {
            display: inline-block;
            vertical-align: top;
            min-width: 1px;
            font-size: 24px;
            line-height: 1.5;
            font-weight: 500;
          }
        }
        .main-penal-content-mid {
          -webkit-box-align: center;
          -ms-flex-align: center;
          -webkit-box-direction: normal;
          -webkit-box-orient: horizontal;
          margin: 0px;
          padding: 0px;
          position: relative;
          -webkit-flex: auto;
          -ms-flex: auto;
          flex: auto;
          border-top: 1px solid #E6ECF1;
          padding-left: 40px;
          padding-top: 0px;
          padding-bottom: 0px;
          padding-right: 0px;
          display: -webkit-box;
          display: -moz-box;
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          -webkit-flex-direction: row;
          -ms-flex-direction: row;
          flex-direction: row;
          -webkit-align-items: center;
          align-items: center;
          .main-penal-content-mid-left {
            display: block;
            margin-right: 40px;
            padding: 0px;
            margin-top: 32px;
            width: 340px;
          }
          .main-penal-content-mid-right {
            position: relative;
            width: 535px;
            min-height: 280px;
            align-self: flex-end;
            background: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526970890&di=693ff5bb06764783cc114979d25ea8b9&imgtype=jpg&er=1&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F203fb80e7bec54e7f6969a37b2389b504fc26aa5.jpg) 0% 0% / 1070px;
          }
        }
        .main-penal-content-footer {
          display: block;
          margin: 0px;
          padding: 0px;
          position: relative;
          background: #fff;
          border-top: 1px solid #E6ECF1;
          padding-top: 24px;
          padding-bottom: 24px;
          padding-right: 40px;
          padding-left: 40px;
          .main-penal-content-footer-content {
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            -webkit-box-direction: normal;
            -webkit-box-orient: horizontal;
            margin: 0px;
            padding: 0px;
            -webkit-flex: auto;
            -ms-flex: auto;
            flex: auto;
            display: -webkit-box;
            display: -moz-box;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            -webkit-flex-direction: row;
            -ms-flex-direction: row;
            flex-direction: row;
            -webkit-justify-content: space-between;
            justify-content: space-between;
            .main-penal-content-footer-content-left {
              display: block;
              margin: 0px;
              padding: 0px;
            }
          }
        }
      }
    }
  }

</style>
