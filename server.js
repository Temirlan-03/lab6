// server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Добавим middleware для генерации уникального id
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.id = Date.now();
  }
  next();
});

server.use(router);
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
