<template>
  <div class="container">
    <el-form 
    label-position="left">
      <el-form-item label="数字范围">
        <el-select v-model="form.range">
          <el-option label="10以内" :value="1"></el-option>
          <el-option label="100以内" :value="2"></el-option>
          <el-option label="1000以内" :value="3"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="运算符">
        <el-checkbox-group 
          v-model="form.operators"
          @change="onChangeOperators"
          :min="1"
        >
          <el-checkbox label="+" name="type"></el-checkbox>
          <el-checkbox label="-" name="type"></el-checkbox>
          <el-checkbox label="×" name="type"></el-checkbox>
          <el-checkbox label="÷" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="左侧右侧">
        <el-checkbox-group
          v-model="form.side"
          :min="1"
        >
          <el-checkbox label="左侧" name="type"></el-checkbox>
          <el-checkbox label="右侧" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'console',
  props: {
    msg: {
      type: String,
      default: 'hello'
    }
  },
  data() {
    return {
      form: {
        range: 1,
        operators: ['+'],
        side: ['左侧']
      }
    }
  },
  methods: {
    onChangeOperators() {
      console.log(this.form.operators)
    }
  }
}
</script>

<style scoped>
.container {
  padding: 10px;
}

.input {
  width: 200px;
}
</style>
