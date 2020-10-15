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
          <span>{{ scope.row.display_time }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="PartNo">
        <template slot-scope="scope">
          {{ scope.row.PartNo }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="代码">
        <template slot-scope="scope">
          {{ scope.row.code }}
        </template>
      </el-table-column>
      <el-table-column label="名称" align="center">
        <template slot-scope="scope">
          {{ scope.row.title }}
        </template>
      </el-table-column>
      <el-table-column label="产线" align="center">
        <template slot-scope="scope">
          {{ scope.row.production_line }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="库位">
        <template slot-scope="scope">
          {{ scope.row.location }}
        </template>
      </el-table-column>
      <el-table-column label="申请人" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.author }}</span>
        </template>
      </el-table-column>


       <el-table-column label="夹具健康状态" align="center" >
        <template slot-scope="scope" >
          <el-tag :type="scope.row.color[scope.row.Health]" @click="handShowChart(row, $index,scope.row.Health)">{{ scope.row.Health }}</el-tag>
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

    <el-dialog :title="详情" :visible.sync="dialogFormVisible1" width="35%"> 
        <el-card :span="4" :body-style="{ padding: '0px' }">
        <!-- el-image
          :src="route"
          class="img"
        /> -->
        <img
          src="@/assets/优秀.png"
          class="img"
        />
      </el-card>
    </el-dialog>

    <el-dialog :title="详情" :visible.sync="dialogFormVisible2" width="35%"> 
        <el-card :span="4" :body-style="{ padding: '0px' }">
        <!-- el-image
          :src="route"
          class="img"
        /> -->
        <img
          src="@/assets/良好.png"
          class="img"
        />
      </el-card>
    </el-dialog>

    <el-dialog :title="详情" :visible.sync="dialogFormVisible3" width="35%"> 
        <el-card :span="4" :body-style="{ padding: '0px' }">
        <!-- el-image
          :src="route"
          class="img"
        /> -->
        <img
          src="@/assets/中等.png"
          class="img"
        />
      </el-card>
    </el-dialog>

    <el-dialog :title="详情" :visible.sync="dialogFormVisible4" width="35%"> 
        <el-card :span="4" :body-style="{ padding: '0px' }">
        <!-- el-image
          :src="route"
          class="img"
        /> -->
        <img
          src="@/assets/较差.png"
          class="img"
        />
      </el-card>
    </el-dialog>

    <el-dialog :title="详情" :visible.sync="dialogFormVisible5" width="35%"> 
        <el-card :span="4" :body-style="{ padding: '0px' }">
        <!-- el-image
          :src="route"
          class="img"
        /> -->
        <img
          src="@/assets/极差.png"
          class="img"
        />
      </el-card>
    </el-dialog>
  </div>
</template>

<script >
import { getList } from '@/api/lend'
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
      dialogFormVisible1: false,
      dialogFormVisible2: false,
      dialogFormVisible3: false,
      dialogFormVisible4: false,
      dialogFormVisible5: false,
      route:"src/assets/tool.png"
      // route: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
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
    handShowChart(row, index,Health) {
      if(Health =='优秀'){
        this.dialogFormVisible1 = true
      }
      if(Health =='良好'){
        this.dialogFormVisible2 = true
      }
      if(Health =='中等'){
        this.dialogFormVisible3 = true
      }
      if(Health =='较差'){
        this.dialogFormVisible4 = true
      }
      if(Health =='极差'){
        this.dialogFormVisible5 = true
      }
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
