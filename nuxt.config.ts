// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  plugins: ['@/plugins/axios.js'],
  css: [
    '@/assets/styles/main.scss' // Path to your global SCSS file
  ],
  runtimeConfig: {
    public: {
      apiBase: '/api', // Use the proxy base path
    },
  },
   
})
