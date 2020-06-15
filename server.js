const express = require('express');
const next = require('next');
const nextI18NextMiddleware = require('next-i18next/middleware').default
const nextI18next = require('./i18n')
const path = require('path');
const url = require('url');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
if (!dev && cluster.isMaster) {
  for (let i = 0; i < numCPUs; i++) {cluster.fork();
  }
  cluster.on('exit', (worker, code, signal) => {
    console.error(`Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`);
  });
} else {
  const nextApp = next({ dir: '.', dev });
  const nextHandler = nextApp.getRequestHandler();
  nextApp.prepare().then(() => {
      const server = express();
      nextI18next.initPromise
      server.use(nextI18NextMiddleware(nextI18next))

      if (!dev) {
        server.use(function(req, res, next) {
          var proto = req.headers["x-forwarded-proto"];
          if (proto === "https") {
            res.set({'Strict-Transport-Security': 'max-age=31557600'});
            return next();
          }
          res.redirect("https://" + req.headers.host + req.url);
        });
      }
      server.use('/static', express.static(path.join(__dirname, 'static'), {maxAge: dev ? '0' : '365d'}));
      server.get('*', (req, res) => {
        const parsedUrl = url.parse(req.url, true);
        nextHandler(req, res, parsedUrl);
      });
      server.listen(port, (err) => {if (err) throw err;});
    });
}
