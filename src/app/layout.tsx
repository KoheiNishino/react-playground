import type { ReactNode } from 'react'
import { ColorSchemeScript, mantineHtmlProps } from '@mantine/core'
import { Top } from './Top'

import '@mantine/core/styles.css'
import './css/globals.css'

export default function RootLayout({
  children,
}: { children: ReactNode }) {
  return (
    <html lang="ja" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <main className="p-2">
          <Top />
          {children}
        </main>
      </body>
    </html>
  )
}
