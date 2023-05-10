// Plugins
import router from '@/router'
import store from '@/store'
import mdiVue from 'mdi-vue/v3'
import * as mdijs from '@mdi/js'

import type { App } from 'vue'

export function registerPlugins (app: App) {
  app
    .use(router)
    .use(store)
    .use(mdiVue, { icons: mdijs })
}