<template>
  <div class="dashboard-editor-container">
    <github-corner></github-corner>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>卡片名称</span>
        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
      </div>
      <div v-for="o in 4" :key="o" class="text item">
        {{'列表内容 ' + o }}
      </div>
    </el-card>
    <!--<div class="dashboard-text">姓名:{{name}}</div>-->
    <!--<div class="dashboard-text">帐号:{{login}}</div>-->
    <panel-group></panel-group>
    <!--<div class="dashboard-text">roles:<span v-for='role in roles' :key='role'>{{role}}</span></div>-->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import GithubCorner from '@/components/GithubCorner'
import PanelGroup from './components/PanelGroup'
import { Card } from 'element-ui'

export default {
  name: 'dashboard',
  components: {
    GithubCorner,
    PanelGroup,
    Card
  },
  computed: {
    ...mapGetters([
      'name',
      'login'
    ])
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}
</style>
