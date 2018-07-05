<template>
  <el-container>
    <el-aside style="background-color: #D3DCE6">
      <console v-model="config"></console>
      <div class="print_button">
        <el-button 
          @click="print" 
          type="primary" 
          round>
          点我打印
        </el-button>
      </div>
    </el-aside>

    <el-main style="background-color: #E9EEF3">
      <paper :config="config" ref="paper"></paper>
    </el-main>
  </el-container>
</template>

<script>
import Console from '@/components/console.vue'
import Paper from '@/components/paper.vue'
import { Printd } from 'printd'
import cssText from '@/printCss'

export default {
  components: {
    Console,
    Paper
  },
  data() {
    return {
      d: new Printd(),
      config: {
        range: 1,
        operators: ['+', '-'],
        side: ['右侧'],
        numbers: 2,
        title: '练习题',
        blank: '空格',
        whole: []
      }
    }
  },
  methods: {
    print() {
      this.d.print(this.$refs.paper.$el, cssText)
    }
  }
}
</script>

<style>
.print_button {
  padding: 10px;
}
</style>
