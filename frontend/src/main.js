
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
// import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faEnvelope, faLock)


import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import './assets/main.css'



const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)

app.mount('#app')
