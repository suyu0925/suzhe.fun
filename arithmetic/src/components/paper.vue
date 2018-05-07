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
      for (let i = 0; i < 25; i++) {
        const row = []
        for (let j = 0; j < 4; j++) {
          const equation = generate({
            range: range,
            operators: this.config.operators,
            parenthese: this.config.side.indexOf('左侧') >= 0,
            length: this.config.numbers
          })
          row.push(equation)
        }
        equations.push(row)
      }

      console.log(equations.length)

      return equations
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

div.row > h3 {
  float: left;
  font-size: 1.5em;
  /*Consolas Courier New*/
  font-family: Courier New;
  width: 20%;
  margin-top: 0;
  margin-bottom: 0.9em;
}

.name {
  margin-left: 100mm;
}
</style>
