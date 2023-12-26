// SPDX-FileCopyrightText: 2023 Diego Elio Pettenò
//
// SPDX-License-Identifier: 0BSD

/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

const prodConfig = {
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true
    }
}

const devConfig = {}

module.exports = (phase, { defaultConfig }) => {
    return phase == PHASE_DEVELOPMENT_SERVER ? devConfig : prodConfig;
}
