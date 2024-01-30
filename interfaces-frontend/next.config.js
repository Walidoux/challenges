// @ts-check

const path = require('path')

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [
      path.join(__dirname, 'styles/abstracts'),
      path.join(__dirname, 'styles/base')
    ]
  }
}
