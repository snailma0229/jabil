<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px" style="width: 65%;">
      <el-form-item label="夹具名称" prop="name" required>
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="夹具编号" prop="id" required>
        <el-input v-model="form.id" />
      </el-form-item>
      <el-form-item label="库位信息" prop="region" required>
        <el-select v-model="form.region" placeholder="请选择库位信息">
          <el-option label="16-A1-1" value="shanghai" />
          <el-option label="16-A2-1" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="接收日期" prop="date" required>
        <el-col :span="11">
          <el-date-picker v-model="form.date" type="date" placeholder="选择日期" style="width: 100%;" />
        </el-col>
      </el-form-item>
      <el-form-item label="PM频率" prop="frequency" required>
        <el-input v-model="form.frequency">
          <template slot="append">M / s</template>
        </el-input>
      </el-form-item>
      <el-form-item label="PM类型" prop="type" required>
        <el-input v-model="form.type" />
      </el-form-item>
      <el-form-item label="生产产品" prop="product" required>
        <el-input v-model="form.product" />
      </el-form-item>
      <el-form-item label="备注" prop="remark">
        <el-input v-model="form.remark" clearable :autosize="{ minRows: 3, maxRows: 10}" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">提交</el-button>
        <el-button style="margin-left: 20px;" @click="resetForm('form')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        id: '',
        region: '',
        date: '',
        frequency: '',
        type: '',
        product: '',
        remark: ''
      }
    }
  },
  methods: {
    submitForm(itemName) {
      this.$refs[itemName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(itemName) {
      this.$refs[itemName].resetFields()
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

