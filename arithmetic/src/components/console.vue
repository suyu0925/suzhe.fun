<template>
  <div class="container">
    <el-form label-position="left">
      <el-form-item label="学生年级">
        <el-select v-model="value.grade" placeholder="请选择年级" @change="onChangeGrade">
          <el-option label="一年级" :value="1"></el-option>
          <el-option label="二年级" :value="2"></el-option>
          <el-option label="三年级" :value="3"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="练习类型">
        <el-select v-model="value.type" placeholder="请选择类型" @change="onChangeType">
          <el-option
            v-for="item in typeOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'console',
  props: {
    value: {
      type: Object,
      default: {
        grade: null,
        type: null,
        title: '练习题'
      }
    }
  },
  data() {
    return {
      typeOptions: []
    }
  },
  created() {
    this.matchTypeOptions()
  },
  methods: {
    matchTypeOptions() {
      // 修改typeOptions
      if (this.value.grade === 3) {
        this.typeOptions = [
          {
            label: '除法练习（1）',
            value: 'devide_1'
          },
          {
            label: '连乘练习（1）',
            value: 'multiplication_continuous_1'
          }
        ]
        const selectOption = this.typeOptions.find(
          o => o.value === this.value.type
        )
        if (selectOption) this.value.title = selectOption.label
      } else {
        this.typeOptions = []
      }
    },
    onChangeGrade() {
      this.matchTypeOptions()
      this.value.type = null
    },
    onChangeType() {
      const selectOption = this.typeOptions.find(
        o => o.value === this.value.type
      )
      if (selectOption) this.value.title = selectOption.label
      this.$emit('input', this.value)
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
