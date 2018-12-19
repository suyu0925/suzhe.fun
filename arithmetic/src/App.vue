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
      this.loading = true
      this.d.print(this.$refs.paper.$el, cssText, (win, doc, node, launch) => {
        // 添加element-ui的css
        const link = win.document.createElement('link')
        link.setAttribute('rel', 'stylesheet')
        link.setAttribute('type', 'text/css')
        link.setAttribute(
          'href',
          'https://unpkg.com/element-ui/lib/theme-chalk/index.css'
        )
        win.document.getElementsByTagName('head')[0].appendChild(link)

        // 给1秒的时候让它下载css文件
        setTimeout(() => {
          launch(win)
          this.loading = false
        }, 1000)
      })
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
