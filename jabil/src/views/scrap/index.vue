<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px" style="width: 65%;">
      <el-form-item label="夹具编号" prop="id" required>
        <el-input v-model="form.id" />
      </el-form-item>
      <el-form-item label="报废原因" prop="remark" required>
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
        id: '',
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

