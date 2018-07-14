<template>
  <div>
    <div class="center">
      <h1> {{ config.title }} </h1>
    </div>
    <div class="row center">
      <h2>班级</h2>
      <h2 class="name">姓名</h2>
    </div>
    <div class="row" 
      v-for="(row, index) in getEquations"
      :key="index">
      <h3 
        :class="getColumnClass()"
        v-for="(equation, index) in row"
        :key="index">
        <span v-html="equation"></span>
      </h3>
    </div>
  </div>
</template>

<script>
import generate from '@/utils/equation'

export default {
  name: 'paper',
  props: {
    title: {
      type: String,
      default: '100以内加减混合'
    },
    config: {
      type: Object
    }
  },
  data() {
    return {
    }
  },
  computed: {
    getEquations: function () {
      let range = {}
      if (this.config.range === 1) {
        range.min = 1
        range.max = 9
        range.result = {
          min: 0,
          max: 18
        }
      } else if (this.config.range === 2) {
        range.min = 1
        range.max = 99
        range.result = {
          min: 0,
          max: 99
        }
      } else if (this.config.range === 3) {
        range.min = 1
        range.max = 999
        range.result = {
          min: 0,
          max: 999
        }
      }

      const equations = []
      let rows = this.config.numbers === 3 ? (this.config.range === 3 ? 20 : 24) : 20
      let cols = this.config.numbers === 3 ? (this.config.range === 3 ? 3 : 4) : 5

      // 三位数+左侧+两个数字
      if (this.config.side.indexOf('左侧') >= 0 && this.config.range === 3 && this.config.numbers === 2) {
        rows = 24
        cols = 4
      }

      for (let i = 0; i < rows; i++) {
        const row = []
        for (let j = 0; j < cols; j++) {
          const equation = generate({
            range: range,
            operators: this.config.operators,
            parenthese: this.config.side.indexOf('左侧') >= 0,
            length: this.config.numbers,
            blank: this.config.blank,
            whole: this.config.whole
          })
          row.push(equation)
        }
        equations.push(row)
      }

      // console.log(equations.length)

      return equations
    }
  },
  methods: {
    getColumnClass() {
      let columnClass = ''
      if (this.config.numbers === 3) {
        columnClass = (this.config.range === 3 ? 'most-incompact' : 'incompact')
      } else if (this.config.side.indexOf('左侧') >= 0 && this.config.range === 3) {
        columnClass = 'incompact'
      }
      return columnClass
    }
  }
}
</script>

<style scoped>
body {
  height: 297mm;
  width: 210mm;
  /* to centre page on screen*/
  margin-left: auto;
  margin-right: auto;
}

h1,
h2 {
  font-family: 微软雅黑;
}

.center {
  text-align: center;
}

div.row {
  margin-left: 5mm;
  margin-right: 5mm;
  margin-top: 5mm;
}

div.row > h2 {
  display: inline;
}

h3 {
  float: left;
  font-size: 1.5em;
  /*Consolas Courier New*/
  font-family: Courier New;
  width: 20%;
  margin-top: 0;
  margin-bottom: 0.9em;
}

.incompact {
  width: 25%;
  font-size: 1.3em;
}

.most-incompact {
  width: 33%;
  font-size: 1.3em;
}

.name {
  margin-left: 100mm;
}
</style>
