import { devtools } from "vue";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["nuxt-mongoose"],

  mongoose: {
    uri: process.env.MONGODB_URI,
    modelsDir: 'models',
    options: {},
    devtools: true
  }
})