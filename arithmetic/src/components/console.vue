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
      if (this.value.grade === 1) {
        this.typeOptions = [
          {
            label: '加法练习（1）',
            value: 'additive_1'
          },
          {
            label: '加法练习（2）',
            value: 'additive_2'
          },
          {
            label: '加法练习（3）',
            value: 'additive_3'
          },
          {
            label: '10以内减法',
            value: 'subtraction_1'
          },
          {
            label: '20以内减法',
            value: 'subtraction_2'
          },
          {
            label: '100以内减法',
            value: 'subtraction_3'
          },
          {
            label: '10以内混合加减',
            value: 'mix_blow_10'
          },
          {
            label: '20以内混合加减',
            value: 'mix_blow_20'
          },
          {
            label: '括号练习（1）',
            value: 'additive_4'
          }
        ]
      } else if (this.value.grade === 3) {
        this.typeOptions = [
          {
            label: '乘法练习（1）',
            value: 'multiplication_1'
          },
          {
            label: '乘法练习（2）',
            value: 'multiplication_2'
          },
          {
            label: '连乘练习（1）',
            value: 'multiplication_continuous_1'
          },
          {
            label: '除法练习（1）',
            value: 'devide_1'
          },
          {
            label: '除法练习（2）',
            value: 'devide_2'
          },
          {
            label: '除法练习（3）',
            value: 'devide_3'
          },
          {
            label: '除法练习（4）',
            value: 'devide_4'
          },
          {
            label: '括号练习（1）',
            value: 'parentheses_1'
          },
          {
            label: '括号练习（2）',
            value: 'parentheses_2'
          }
        ]
      } else {
        this.typeOptions = []
      }
      const selectOption = this.typeOptions.find(
        o => o.value === this.value.type
      )
      if (selectOption) this.value.title = selectOption.label
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
