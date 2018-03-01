const path = require('path')
const FileLinker = require(path.resolve(require.resolve('rua'), '../dev/index.js')).FileLinker

// console.log()

new FileLinker({
  path: './src',
  links: require('./linker.data.js'),
  templates: undefined,
}).link()
