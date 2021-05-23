import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import '@/styles/index.scss'
import router from './router'
import { store, key } from './store'
import { generateDummyData } from '@/data'
generateDummyData()

const app = createApp(App)

app
  .use(store, key)
  .use(router)
  .mount('#app')
