<template>
  <div class="container">
    <el-form 
    label-position="left">
      <el-form-item label="数字个数">
        <el-select v-model="value.numbers" @change="$emit('input', value)">
          <el-option label="2" :value="2"></el-option>
          <el-option label="3" :value="3"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="数字范围">
        <el-select v-model="value.range" @change="$emit('input', value)">
          <el-option label="10以内" :value="1"></el-option>
          <el-option label="100以内" :value="2"></el-option>
          <el-option label="1000以内" :value="3"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="运算符">
        <el-checkbox-group 
          v-model="value.operators"
          @change="$emit('input', value)"
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
          v-model="value.side"
          :min="1"
          @change="$emit('input', value)"
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
    value: Object
  },
  methods: {
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
