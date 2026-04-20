// SPDX-FileCopyrightText: 2023 Diego Elio Pettenò
//
// SPDX-License-Identifier: 0BSD

import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        ...components,
        h1: ({ children }) => <h1 className="title is-1">{children}</h1>,
        h2: ({ children }) => <h2 className="title is-3">{children}</h2>,
    }
}
