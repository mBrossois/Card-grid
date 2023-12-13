import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import CardGridLibrary from "card-grid-library"
import 'card-grid-library/style.css'

createApp(App).use(CardGridLibrary).mount('#app')
