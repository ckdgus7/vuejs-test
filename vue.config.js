module.exports = {
  runtimeCompiler: true,
  devServer: {
    host: 'localhost',
    port: 3333, // CHANGE YOUR PORT HERE!
    https: false,
    hotOnly: false,
  },
  transpileDependencies: ['vuetify'],
}
