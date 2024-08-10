const jsonServer = require('json-server');
const fs = require('fs');
const server = jsonServer.create();
const db = JSON.parse(fs.readFileSync('db.json'))
const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running')
});