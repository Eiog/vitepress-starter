import { h } from 'vue'
import type { EnhanceAppContext, Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import { NaiveUIContainer } from '@vitepress-demo-preview/component'
import TwoslashFloatingVue from '@shikijs/vitepress-twoslash/client'
import '@shikijs/vitepress-twoslash/style.css'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'
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
  enhanceApp({ app }: EnhanceAppContext) {
    app.component('DemoPreview', NaiveUIContainer)
    app.use(TwoslashFloatingVue)
    enhanceAppWithTabs(app)
  },
}satisfies Theme
