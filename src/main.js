import './assets/main.css'
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App.vue'
import router from './router'
 library.add(fas);
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('fa' ,FontAwesomeIcon)
app.mount('#app')
