import { h } from 'vue'
import type { App } from 'vue'
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import { NaiveUIContainer } from '@vitepress-demo-preview/component'
import Layout from './Layout.vue'
import 'uno.css'
import '@unocss/reset/tailwind-compat.css'
import '@vitepress-demo-preview/component/dist/style.css'
import './vars.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    const { frontmatter } = useData()
    const className = frontmatter.value.className ?? ''
    return h(Layout, { class: className }, {
      'nav-bar-title-after': () => h('span', {}, { default: () => '🕹️' }),
    })
  },
  enhanceApp({ app }: { app: App }) {
    app.component('DemoPreview', NaiveUIContainer)
  },
}
