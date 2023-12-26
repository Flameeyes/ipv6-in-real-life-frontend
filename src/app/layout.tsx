// SPDX-FileCopyrightText: 2023 Diego Elio Pettenò
//
// SPDX-License-Identifier: 0BSD

import type { Metadata } from 'next'
import 'bulma/bulma.sass'

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
        <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
              IPv6 In Real Life
            </a>
          </div>

          <div className="navbar-menu">
            <div className="navbar-start">
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link" href="/">
                  Results
                </a>

                <div className="navbar-dropdown">
                  <a className="navbar-item" href="/details">
                    Detailed results
                  </a>
                </div>
              </div>

              <a className="navbar-item" href="/about">
                About
              </a>
            </div>

            <div className="navbar-end">
              <a className="navbar-item" href="https://github.com/Flameeyes/ipv6-in-real-life">
                GitHub
              </a>
            </div>
          </div>
        </nav>
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
