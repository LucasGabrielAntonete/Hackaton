import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './plugins/axios'

import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faLocationDot } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faLocationDot)

const app = createApp(App)
;('')
app.use(createPinia())
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
