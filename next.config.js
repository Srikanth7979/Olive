/** @type {import('next').NextConfig} */
const nextConfig = {}
const path = require('path')

module.exports = nextConfig

 
// module.exports = {
//   sassOptions: {
//     includePaths: [path.join(__dirname, 'src', 'styles')],
//   },
// }

// webpack: (config) => {
//     const oneOf = config.module.rules.find((rule) => typeof rule.oneOf === 'object')
  
//     if (oneOf) {
//       const moduleSassRule = oneOf.oneOf.find((rule) =>
//         regexEqual(rule.test, /\.module\.(scss|sass)$/)
//       )
  
//       if (moduleSassRule) {
//         const cssLoader = moduleSassRule.use.find(({ loader }) => loader.includes('css-loader'))
//         if (cssLoader) {
//           // Use the default CSS modules mode. Next.js use 'pure'. Not sure of all implications
//           cssLoader.options = {
//             ...cssLoader.options,
//             modules: cssLoaderOptions(cssLoader.options.modules),
//           }
//         }
//       }
//     }
//     return config
//   }