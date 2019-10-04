const path = require('path');

module.exports = {
    mode: 'development',
    entry:{
        main: './src/app.js',
    },
    output:{
        filename: 'js/[name].js',
        path: path.resolve(__dirname, '../dist'),
    },
    devServer:{
        open: true,
    },
}