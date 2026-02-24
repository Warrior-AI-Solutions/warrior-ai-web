import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Warrior AI Solutions",
  description: "Where Truth Meets Time. Production-ready AI coaching infrastructure.",
  lang: 'en-US',

  head: [
    ['meta', { name: 'theme-color', content: '#0A1628' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:locale', content: 'en_US' }],
    ['meta', { name: 'og:title', content: 'Warrior AI Solutions — Where Truth Meets Time' }],
    ['meta', { name: 'og:description', content: 'Production-ready AI coaching infrastructure for the Warrior community. 5-layer architecture. 7 specialist agents. Tested. Secure. Scaled to 10,000 warriors.' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Playfair+Display:wght@700;700i&display=swap' }],
  ],

  appearance: 'dark',

  themeConfig: {
    logo: '/warrior-shield.svg',
    siteTitle: 'Warrior AI',

    nav: [
      { text: 'QA Strategy', link: '/qa' },
      { text: 'Architecture', link: '/architecture' },
    ],

    footer: {
      message: 'Where Truth Meets Time.',
      copyright: '© 2026 Warrior AI Solutions'
    },
  }
})
