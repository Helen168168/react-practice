import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteMockServe } from 'vite-plugin-mock';
// const path = require('path');

export default defineConfig({
  plugins: [react(),
    viteMockServe({
      mockPath: 'mock',
      localEnabled: true, // 是否应用于本地
      prodEnabled: false, // 是否应用于生产
      supportTs: false, // 打开后 可以读取 ts 文件模块 请注意 打开后将无法监视.js 文件
      watchFiles: true, // 监视文件更改 这样更改mock的时候，不需要重新启动编译
    })
  ],
  resolve: {
    // 配置路径别名
    // alias: {
    //   '@': path.resolve(__dirname, './src'),
    // },
  },
})
