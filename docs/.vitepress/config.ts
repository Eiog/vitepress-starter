import { cwd } from 'node:process'
import { defineConfig } from 'vitepress'
import { componentPreview, containerPreview } from '@vitepress-demo-preview/plugin'
import { withPwa } from '@vite-pwa/vitepress' // https://github.com/vite-pwa/vitepress
import { searchForWorkspaceRoot } from 'vite'
import UnoCss from 'unocss/vite'
import { getSidebar } from 'vitepress-plugin-auto-sidebar'
import { transformerTwoslash } from '@shikijs/vitepress-twoslash'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

export default withPwa(defineConfig({
  title: 'VitePress Starter',
  description: 'Just playing around.',
  head: [
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
    ['link', { rel: 'mask-icon', href: '/favicon.svg', color: '#ffffff' }],
    ['meta', {
      name: 'keywords',
      content: 'PWA, VitePress, workbox, Vite, vite-plugin',
    }],
    ['link', { rel: 'apple-touch-icon', href: '/pwa-192x192.png', sizes: '192x192' }],
  ],
  themeConfig: {
    siteTitle: 'VitePress Starter',
    logo: '/vitepress-logo-mini.svg',
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/Eiog',
      },
    ],
    nav: [
      { text: '首页', link: '/' },
      {
        text: '相关资源',
        items: [
          { text: 'VitePress', link: 'https://vitepress.vuejs.org/' },
        ],
      },
    ],
    sidebar: getSidebar({
      contentRoot: 'docs',
      contentDirs: ['guide'],
      collapsible: false,
      collapsed: false,
    }), // https://github.com/JonathanSchndr/vitepress-plugin-auto-sidebar
    sidebarMenuLabel: '目录',
    outline: {
      level: 'deep',
      label: '本页目录',
    },
    search: {
      provider: 'local',
    },
  },
  vite: {
    plugins: [
      UnoCss(),
    ],
    server: {
      fs: {
        allow: [searchForWorkspaceRoot(cwd())],
      },
    },
    logLevel: 'info',
    define: {
      __DATE__: `'${new Date().toISOString()}'`,
    },
  },
  pwa: {
    mode: 'development',
    base: '/',
    scope: '/',
    registerType: 'autoUpdate',
    // injectRegister: 'inline',
    includeAssets: ['favicon.svg'],
    manifest: {
      name: 'VitePress PWA',
      short_name: 'VitePressPWA',
      theme_color: '#ffffff',
      icons: [
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
    },
    workbox: {
      globPatterns: ['**/*.{css,js,html,svg,png,ico,txt,woff2}'],
    },
    devOptions: {
      enabled: true,
      navigateFallback: '/',
    },
  },
  markdown: {
    config(md) {
      md.use(containerPreview) // https://github.com/flingyp/vitepress-demo-preview
      md.use(componentPreview)
      md.use(tabsMarkdownPlugin) // https://github.com/sapphi-red/vitepress-plugins
    },
    theme: {
      dark: 'dracula-soft',
      light: 'vitesse-light',
    },
    codeTransformers: [
      transformerTwoslash(), // https://shiki.tmrs.site/packages/vitepress
    ],
  },
}))
