<template>
  <!-- <div class="dashboard-container"> -->
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" prop="created_at" label="时间">
        <template slot-scope="scope">
          <span>{{ scope.row.time }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="申请人">
        <template slot-scope="scope">{{ scope.row.author }}</template>
      </el-table-column>
      <el-table-column label="夹具编号" align="center">
        <template slot-scope="scope">{{ scope.row.code }}</template>
      </el-table-column>
      <el-table-column align="center" label="故障描述">
        <template slot-scope="scope">{{ scope.row.reason }}</template>
      </el-table-column>
      <el-table-column align="center" label="详情">
        <template slot-scope="{row,$index}">
          <el-button plain type="success" @click="handleShowPic(row, $index)">图片</el-button>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="230" class-name="small-padding fixed-width">
        <template slot-scope="{row,$index}">
          <el-button type="primary" size="mini" @click="handlePass(row, $index)">维修</el-button>
          <el-button
            v-if="row.status!='deleted'"
            size="mini"
            type="danger"
            @click="handleDelete(row,$index)"
          >驳回</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog :title="详情" :visible.sync="dialogFormVisible" width="35%">
      <el-card :span="4" :body-style="{ padding: '0px' }">
        <img
          src="@/assets/tool.png"
          class="image"
        >
        <div style="padding: 14px;">
          <span>{{ detail }}</span>
          <div class="bottom clearfix">
            <span class="time">故障描述</span>
            <!-- <el-button type="text" class="button">操作按钮</el-button> -->
          </div>
        </div>
      </el-card>
    </el-dialog>
  </div>
</template>

<script>
import { getList } from '@/api/repair'

export default {
  filters: {
    statusFilter(status) {
      if (status) {
        return 'danger'
      } else {
        return 'success'
      }
    }
  },
  data() {
    return {
      list: null,
      listLoading: true,
      detail: '',
      dialogFormVisible: false
    }
  },
  computed: {},
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList().then(response => {
        this.list = response.data.items
        this.listLoading = false
      })
    },
    handleShowPic(row, index) {
      this.dialogFormVisible = true
      this.detail = this.list[index].reason
    },
    handlePass(row, index) {
      this.$notify({
        title: 'Success',
        message: '已同意',
        type: 'success',
        duration: 2000
      })
      this.list.splice(index, 1)
    },
    handleDelete(row, index) {
      this.$notify({
        title: 'Success',
        message: '已否决',
        type: 'success',
        duration: 2000
      })
      this.list.splice(index, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
.app-container {
  background-color: rgb(240, 242, 245);
}
 .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    // width: 500px;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }

  .clearfix:after {
      clear: both
  }
</style>
