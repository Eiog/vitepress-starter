import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'

export default {
  extends: DefaultTheme,
  Layout: () => {
    const { frontmatter } = useData()
    const className = frontmatter.value.className ?? ''
    return h(DefaultTheme.Layout, { class: className }, {
      'nav-bar-title-after': () => h('span', {}, { default: () => '🎉' }),
    })
  },
}
