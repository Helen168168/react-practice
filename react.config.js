const path = require('path')

const resolve = function(dir) {
    return path.resolve(__dirname, dir)
}

module.exports = {
    webpack: {
        alias: {
            '@': resolve('src'),
            'components': resolve('src/components')
        }
    }
}