import { createApp } from 'vue'
import App from './App.vue'

// Pinia
import { createPinia } from 'pinia'

createApp(App).use(createPinia()).mount('#app')
