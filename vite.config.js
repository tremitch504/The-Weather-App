import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// const Dotenv = require('dotenv-webpack');
import Dotenv from 'dotenv-webpack'
import { config } from 'node:process'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
  ], 
  resolve: { 
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

  configureWebpack: {
    plugins: [
      new Dotenv()
    ]
  },
})


// module.exports ={
//   chainWebpack: config => {
//     config.module
//     .rule('graph')
//   }
// }