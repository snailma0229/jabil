<template>
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
        <template slot-scope="scope">
          {{ scope.row.people }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="夹具名称">
        <template slot-scope="scope">
          {{ scope.row.title }}
        </template>
      </el-table-column>
      <el-table-column label="夹具编号" align="center">
        <template slot-scope="scope">
          {{ scope.row.code }}
        </template>
      </el-table-column>
      <el-table-column align="center" prop="receive_at" label="接受日期">
        <template slot-scope="scope">
          <span>{{ scope.row.receiveTime }}</span>
        </template>
      </el-table-column>
      <el-table-column label="PM频率" align="center">
        <template slot-scope="scope">
          {{ scope.row.pmPeriod }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="PM类型">
        <template slot-scope="scope">
          {{ scope.row.pmType }}
        </template>
      </el-table-column>
      <el-table-column label="用于生产何种产品" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.usedFor }}</span>
        </template>
      </el-table-column>
      <el-table-column label="备注" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.remark }}</span>
        </template>
      </el-table-column>
      <el-table-column label="库位信息" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.location }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="230" class-name="small-padding fixed-width">
        <template slot-scope="{row,$index}">
          <el-button type="primary" size="mini" @click="handlePass(row, $index)">
            同意
          </el-button>
          <el-button v-if="row.status!='deleted'" size="mini" type="danger" @click="handleDelete(row,$index)">
            否决
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getList } from '@/api/purchase'

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
      listLoading: true
    }
  },
  computed: {
  },
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
</style>
