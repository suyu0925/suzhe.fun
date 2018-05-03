<template>
  <div>
    <button @click="print">打印</button>

    <div id="container" ref="content">
      <div class="center">
        <h1>100以内加减混合</h1>
      </div>
      <div class="row center">
        <h2>班级</h2>
        <h2 class="name">姓名</h2>
      </div>
      <div class="row" 
        v-for="(row, index) in equations"
        :key="index">
        <h3 
          v-for="(equation, index) in row"
          :key="index">
          {{ equation }}
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
import { Printd } from 'printd'
import cssText from './printCss'

export default {
  data() {
    return {
      d: new Printd(),
      equations: [
        [
          '1+2=',
          '2+3=',
          '2+3=',
          '2+3=',
          '2+3='
        ],
        [
          '1+2=',
          '2+3=',
          '2+3=',
          '2×3=',
          '2÷3='
        ]
      ]
    }
  },
  methods: {
    print() {
      this.d.print(this.$refs.content, cssText)
    }
  }
}
</script>

<style>
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
