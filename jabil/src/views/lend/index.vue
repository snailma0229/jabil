<template>
  <div class="app-container">
    <h3 style="color: rgb(144,147,153)">夹具单个出库</h3>
    <el-form ref="form" :model="form" label-width="120px" style="width: 65%;">
      <el-form-item label="夹具编号" prop="id">
        <el-autocomplete
          v-model="form.id"
          :fetch-suggestions="querySearchFixture"
          placeholder="请输入内容"
          suffix-icon="el-icon-search"
          class="input-with-select"
          style="width: 100%;"
          @select="handleSelect"
        >
          <el-select slot="prepend" v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-autocomplete>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">提交</el-button>
        <el-button style="margin-left: 20px;" @click="resetForm('form')">重置</el-button>
      </el-form-item>
    </el-form>
    <h3 style="color: rgb(144,147,153)">夹具成套出库</h3>
    <el-form ref="form" :model="form" label-width="120px" style="width: 65%;">
      <el-form-item label="生成产品" prop="prod">
        <el-autocomplete
          v-model="form.prod"
          :fetch-suggestions="querySearchPairs"
          placeholder="请输入内容"
          suffix-icon="el-icon-search"
          class="input-with-select"
          style="width: 100%;"
          @select="handleSelectPairs"
        >
          <el-select slot="prepend" v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-autocomplete>
      </el-form-item>
      <el-form-item label="成套夹具" prop="pairsDetail">
        <div class="checkbox-container">
          <el-checkbox
            v-model="checkAll"
            :indeterminate="form.isIndeterminate"
            @change="handleCheckAllChange"
          >全选</el-checkbox>
          <div style="margin: 15px 0;" />
          <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
            <el-checkbox v-for="city in pairsDetail" :key="city" :label="city">{{ city }}</el-checkbox>
          </el-checkbox-group>
        </div>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">提交</el-button>
        <el-button style="margin-left: 20px;" @click="resetForm('form')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getFixture, getPairs, getPairsDetail } from '@/api/lend'

var fixtureOptions = []

export default {
  data() {
    return {
      form: {
        id: '',
        prod: '',
        fixture: [],
        pairs: [],
        timeout: null
      },
      checkAll: false,
      checkedCities: [],
      pairsDetail: fixtureOptions,
      isIndeterminate: true,
      options: [
        {
          value: 'regular',
          label: '常规搜索'
        },
        {
          value: 'fuzzy',
          label: '模糊匹配'
        }
      ],
      value: ''
    }
  },
  mounted() {
    this.loadAll()
  },
  methods: {
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
    },
    loadAll() {
      getFixture().then(response => {
        this.fixture = response.data.items
      })
      getPairs().then(response => {
        this.pairs = response.data.items
      })
    },
    querySearchFixture(queryString, cb) {
      var fixture = this.fixture
      var results = queryString
        ? fixture.filter(this.createStateFilter(queryString))
        : fixture

      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        cb(results)
      }, 3000 * Math.random())
    },
    querySearchPairs(queryString, cb) {
      var pairs = this.pairs
      var results = queryString
        ? pairs.filter(this.createStateFilter(queryString))
        : pairs

      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        cb(results)
      }, 3000 * Math.random())
    },
    createStateFilter(queryString) {
      return state => {
        return (
          state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        )
      }
    },
    handleSelect(item) {
      console.log(item)
    },
    handleSelectPairs(item) {
      getPairsDetail().then(response => {
        console.log('------------->' + response.data.items[0].value)
        fixtureOptions = response.data.items
        this.pairsDetail = response.data.items
      })
    },
    handleCheckAllChange(val) {
      this.checkedCities = val ? fixtureOptions : []
      this.isIndeterminate = false
    },
    handleCheckedCitiesChange(value) {
      const checkedCount = value.length
      this.checkAll = checkedCount === this.pairsDetail.length
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.pairsDetail.length
    }
  }
}
</script>

<style>
.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
.checkbox-container {
  border: 1px solid #e3e3e3;
  border-radius: 8px;
  padding: 0 20px;
  margin-bottom: 30px;
}
</style>

