<template>
  <el-row  class="panel-group" :gutter="40">
    <el-col v-for="course of courses" :key="course.id" :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class='card-panel' >
        <div class="card-panel-icon-wrapper icon-message" @click="handleSetLineChartData('newVisitis')">
          <svg-icon icon-class="documentation" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description" @click="handleSetLineChartData('newVisitis')">
          <div class="card-panel-text">{{ course.title }}</div>
          <div class="card-panel-num">{{ course.brief }}</div>
        </div>
        <div class="card-panel-more">
          <el-popover
            placement="top"
            width="100"
            v-model="visible2" class="card-panel-more-popover">
            <p>是否删除此课程</p>
            <div style="text-align: right; margin: 0">
              <el-button size="mini" type="text" @click="visible2 = false">取消</el-button>
              <el-button type="primary" size="mini" @click="visible2 = false">确定</el-button>
            </div>
            <svg-icon icon-class="shenglvehao" slot="reference" />
          </el-popover>
        </div>
      </div>
    </el-col>

    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel" @click="goNew()">
        <div class="card-panel-icon-wrapper icon-people">
          <svg-icon icon-class="add" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div style="text-align: center;float: left;font-size: 20px">添加新的课程</div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
  import { findAllByUserId } from '@/api/course'

  export default {
    data() {
      return {
        courses: '',
        visible2: false
      }
    },
    created() {
      this.loadCourses()
    },
    components: {
    },
    methods: {
      loadCourses() {
        findAllByUserId(this.$store.state.user.id).then(response => {
          this.courses = response.result.courses
        })
      },
      handleSetLineChartData(type) {
        alert('click')
      },
      goNew() {
        this.$router.push({ path: '/new' })
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .panel-group {
    margin-top: 18px;
    .card-panel-col{
      margin-bottom: 32px;
    }
    .card-panel {
      height: 108px;
      cursor: pointer;
      font-size: 12px;
      position: relative;
      overflow: hidden;
      color: #666;
      background: #fff;
      box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
      border-color: rgba(0, 0, 0, .05);
      display: flex;
      flex-direction: row;
      align-items: center;
      &:hover {
        .card-panel-icon-wrapper {
          color: #fff;
        }
        .icon-people {
          background: #40c9c6;
        }
        .icon-message {
          background: #36a3f7;
        }
        .icon-money {
          background: #f4516c;
        }
        .icon-shoppingCard {
          background: #34bfa3
        }
      }
      .icon-people {
        color: #40c9c6;
      }
      .icon-message {
        color: #36a3f7;
      }
      .icon-money {
        color: #f4516c;
      }
      .icon-shoppingCard {
        color: #34bfa3
      }
      .card-panel-icon-wrapper {
        float: left;
        margin: 0 0 0 10px;
        padding: 16px;
        transition: all 0.38s ease-out;
        border-radius: 6px;
      }
      .card-panel-icon {
        float: left;
        font-size: 48px;
      }

      .card-panel-description {
        display: block;
        margin: 0px;
        padding: 0px 8px;
        flex: 1 1 0%;
        overflow: hidden;
        .card-panel-text {
          line-height: 18px;
          font-size: 20px;
          margin-bottom: 12px;
        }
        .card-panel-num {
          font-size: 8px;
          color: rgba(0, 0, 0, 0.45);
        }
      }
      .card-panel-more {
        margin: 14px 14px 0 0;
        -webkit-box-align: center;
        -webkit-box-pack: center;
        font-size: 18px;
        opacity: 0.5;
        width: 24px;
        height: 24px;
        color: rgb(157, 170, 182);
        display: flex;
        justify-content: center;
        align-items: center;
        align-self: flex-start;
        padding: 0px;
        outline: none;
        text-align: center;
        .card-panel-more-popover{
          -webkit-box-direction: normal;
          -webkit-box-orient: vertical;
          display: flex;
          flex-direction: column;
          flex: 1 1 0%;
        }
      }
    }
  }
</style>
