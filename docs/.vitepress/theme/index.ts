import DefaultTheme from 'vitepress/theme'
import './custom.css'
import HomePage from './HomePage.vue'
import QaPage from './QaPage.vue'
import ArchitecturePage from './ArchitecturePage.vue'
import SecurityPage from './SecurityPage.vue'
import ProgressPage from './ProgressPage.vue'
import JiraPage from './JiraPage.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('HomePage', HomePage)
    app.component('QaPage', QaPage)
    app.component('ArchitecturePage', ArchitecturePage)
    app.component('SecurityPage', SecurityPage)
    app.component('ProgressPage', ProgressPage)
    app.component('JiraPage', JiraPage)
  }
}
