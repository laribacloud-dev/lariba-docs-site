import React from 'react'
import type { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Lariba Cloud</span>,

  project: {
    link: 'https://github.com/node63labs'
  },

  docsRepositoryBase:
    'https://github.com/node63labs/lariba-docs-site/blob/main',

  useNextSeoProps() {
    return {
      titleTemplate: '%s | Lariba Cloud Docs',
      description:
        'Official public developer documentation for Lariba Cloud.',
      openGraph: {
        type: 'website',
        siteName: 'Lariba Cloud Docs'
      }
    }
  },

  sidebar: {
    defaultMenuCollapseLevel: 1
  },

  footer: {
    text: `MIT ${new Date().getFullYear()} © NODE63 Labs.`
  }
}

export default config
