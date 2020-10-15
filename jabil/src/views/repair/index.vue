<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px" style="width: 65%;">
      <el-form-item label="夹具编号" prop="id" required>
        <el-input v-model="form.id" />
      </el-form-item>
      <el-form-item label="故障照片" prop="id" required>
        <el-upload
          ref="upload"
          class="upload"
          drag
          action="https://jsonplaceholder.typicode.com/posts/"
          multiple
        >
          <i class="el-icon-upload" />
          <div class="el-upload__text">
            将文件拖到此处，或
            <em>点击上传</em>
          </div>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>
      <el-form-item label="报修原因" prop="remark" required>
        <el-input
          v-model="form.remark"
          clearable
          :autosize="{ minRows: 3, maxRows: 10}"
          type="textarea"
        />
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
        dialogImageUrl: '',
        dialogVisible: true,
        remark: ''
      }
    }
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    submitForm(itemName) {
      this.$refs[itemName].validate(valid => {
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

</style>

