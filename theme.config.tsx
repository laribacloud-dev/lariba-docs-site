import React from 'react'
import type { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Lariba Cloud</span>,

  project: {
    link: 'https://github.com/laribacloud'
  },

  docsRepositoryBase:
    'https://github.com/laribacloud-dev/lariba-docs-site/blob/main',

  useNextSeoProps() {
    return {
      titleTemplate: '%s | Lariba Cloud Docs',
      description:
        'Official developer documentation for the Lariba Cloud operational event control plane.',
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
    text: `MIT ${new Date().getFullYear()} © Lariba Cloud.`
  }
}

export default config
