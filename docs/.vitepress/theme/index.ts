import DefaultTheme from 'vitepress/theme'
import './custom.css'
import HomePage from './HomePage.vue'
import QaPage from './QaPage.vue'
import ArchitecturePage from './ArchitecturePage.vue'
import SecurityPage from './SecurityPage.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('HomePage', HomePage)
    app.component('QaPage', QaPage)
    app.component('ArchitecturePage', ArchitecturePage)
    app.component('SecurityPage', SecurityPage)
  }
}
