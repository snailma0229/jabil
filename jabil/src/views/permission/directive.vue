<template>
  <div class="app-container">
    <switch-roles @change="handleRolesChange" />
    <div :key="key" style="margin-top:30px;" />

    <div :key="'checkPermission'+key" style="margin-top:60px;">

      <el-tabs type="border-card" style="width:550px;">
        <el-tab-pane v-if="checkPermission(['admin'])" label="您可以进行的操作">
          出入库申请报修申请/审批,报废申请/审批,夹具信息修改，权限控制
        </el-tab-pane>
        <el-tab-pane v-if="checkPermission(['manager'])" label="您可以进行的操作">
          出入库申请，采购申请/审批,报修申请/审批,报废申请/审批,夹具信息修改
        </el-tab-pane>
        <el-tab-pane v-if="checkPermission(['Operator1'])" label="您可以进行的操作">
          出入库申请，报修申请
        </el-tab-pane>
        <el-tab-pane v-if="checkPermission(['Operator2'])" label="您可以进行的操作">
          出入库申请，采购申请,报修申请/审批,报废申请
        </el-tab-pane>
        <el-tab-pane v-if="checkPermission(['visitor'])" label="您可以进行的操作">
          查看基本信息
        </el-tab-pane>
        <el-tab-pane v-if="checkPermission(['supervisor'])" label="您可以进行的操作">
          出入库申请，采购申请/审批,报修申请/审批,报废申请/审批,夹具信息修改
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import permission from '@/directive/permission/index.js' // 权限判断指令
import checkPermission from '@/utils/permission' // 权限判断函数
import SwitchRoles from './components/SwitchRoles'

export default {
  name: 'DirectivePermission',
  components: { SwitchRoles },
  directives: { permission },
  data() {
    return {
      key: 1 // 为了能每次切换权限的时候重新初始化指令
    }
  },
  methods: {
    checkPermission,
    handleRolesChange() {
      this.key++
    }
  }
}
</script>

<style lang="scss" scoped>
.app-container {
  /deep/ .permission-alert {
    width: 320px;
    margin-top: 15px;
    background-color: #f0f9eb;
    color: #67c23a;
    padding: 8px 16px;
    border-radius: 4px;
    display: inline-block;
  }
  /deep/ .permission-sourceCode {
    margin-left: 15px;
  }
  /deep/ .permission-tag {
    background-color: #ecf5ff;
  }
}
</style>

