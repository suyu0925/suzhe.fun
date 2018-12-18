<template>
  <div>
    <el-row id="title">
      <div class="title"><b>{{ config.title }}</b></div>
    </el-row>
    <el-row id="info">
      <el-col :span="6">
        <div class="info">班级</div>
      </el-col>
      <el-col :span="6">
        <div class="info">姓名</div>
      </el-col>
      <el-col :span="6">
        <div class="info">用时</div>
      </el-col>
      <el-col :span="6">
        <div class="info">得分</div>
      </el-col>
    </el-row>
    <el-row v-for="row in layout.rows" :key="row">
      <el-col :span="24 / layout.cols" v-for="col in layout.cols" :key="col">
        <span class="equation" v-html="getEquationHtml(row, col)"></span>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import division from '@/equation/division'
import multiplication from '@/equation/multiplication'

export default {
  name: 'paper',
  props: {
    config: {
      type: Object
    }
  },
  computed: {
    layout: function() {
      if (this.config.grade === 3 && this.config.type === 'devide_1') {
        return {
          rows: 20,
          cols: 3
        }
      } else if (this.config.grade === 3 && this.config.type === 'multiplication_continuous_1') {
        return {
          rows: 20,
          cols: 3
        }
      }
    }
  },
  methods: {
    getColumnClass() {
      let columnClass = ''
      return columnClass
    },
    getEquationHtml: function(row, col) {
      if (this.config.grade === 3 && this.config.type === 'devide_1') {
        if (col === 1) {
          return division(3, 1)
        } else {
          return division(3, 2)
        }
      } else if (this.config.grade === 3 && this.config.type === 'multiplication_continuous_1') {
        return multiplication(3, 1)
      }
      return ''
    }
  }
}
</script>

<style scoped>
body {
  /* A4 size */
  height: 297mm;
  width: 210mm;
  /* to centre page on screen*/
  margin-left: auto;
  margin-right: auto;
  font-family: 微软雅黑;
}

#title {
  text-align: center;
}

#info {
  padding-top: 5mm;
  padding-bottom: 5mm;
}

.title {
  font-size: 2em;
}

.info {
  font-size: 1.8em;
}

.el-row {
  margin-left: 5mm;
  margin-right: 5mm;
  margin-top: 5mm;
}

.equation {
  font-size: 1.5em;
  font-family: Courier New;
}
</style>
