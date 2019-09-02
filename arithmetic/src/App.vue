<template>
  <el-container>
    <el-aside style="background-color: #D3DCE6">
      <console v-model="config"></console>
      <div class="print_button">
        <el-button :loading="loading" @click="print" type="primary" round>点我打印</el-button>
        <el-button @click="refresh" type="primary" round>刷新</el-button>
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
        grade: 3,
        type: 'multiplication_1',
        title: '练习题'
      },
      loading: false
    }
  },
  methods: {
    print() {
      const that = this
      this.loading = true
      this.d.print(
        this.$refs.paper.$el,
        ['https://unpkg.com/element-ui/lib/theme-chalk/index.css', cssText],
        [],
        ({ launchPrint }) => {
          this.loading = false
          launchPrint()
        }
      )
    },
    refresh() {
      // 随便改下config，让它刷新
      this.config.grade = this.config.grade + 1
      this.config.grade = this.config.grade - 1
    }
  }
}
</script>

<style>
.print_button {
  padding: 10px;
}
</style>
