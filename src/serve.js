var express = require('express');
var history = require('connect-history-api-fallback');
var app = express();

const staticFileMiddleware = express.static('dist');

app.use(staticFileMiddleware);

app.use(history({
  index: '/dist/index.html'
}));

app.use(staticFileMiddleware);

app.use(express.static('.'))

const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log('App listening on port ' + port);
}); 