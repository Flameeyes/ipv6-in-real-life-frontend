// SPDX-FileCopyrightText: 2023 Diego Elio Pettenò
//
// SPDX-License-Identifier: 0BSD

/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')
const withMDX = require('@next/mdx')()

const prodConfig = {
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true
    },
    pageExtensions: ['ts', 'tsx', 'mdx'],
}

const devConfig = {
    pageExtensions: ['ts', 'tsx', 'mdx'],
}

module.exports = (phase, { defaultConfig }) => {
    const config = phase == PHASE_DEVELOPMENT_SERVER ? devConfig : prodConfig;
    return withMDX(config);
}
