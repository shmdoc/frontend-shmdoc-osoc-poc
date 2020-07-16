module.exports = {
  devServer: {
    proxy: {
      '/': {
        target: 'http://localhost:80',
        bypass: function(req) {
          if (req.headers.accept.indexOf('html') !== -1) {
            return '/index.html';
          }
        }
      }
    }
  }
}
