// SPDX-FileCopyrightText: 2023 Diego Elio Pettenò
//
// SPDX-License-Identifier: 0BSD

import type { Metadata } from 'next'
import 'bulma/bulma.sass'
import Navbar from '@/components/navbar'

export const metadata: Metadata = {
  title: 'IPv6 In Real Life',
  description: 'A contrarian display of the status of IPv6 deployment',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <footer className="footer">
          <div className="content has-text-centered">
            <p>
              <strong>IPv6 In Real Life</strong> by <a href="https://flameeyes.blog/">Diego Elio Flameeyes</a>.<br />
              The source code is licensed under <a href="https://opensource.org/license/0bsd/">Zero-Clause BSD</a>.
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
