const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;
const db = require('./db.json');

server.use(jsonServer.bodyParser);
server.use(middlewares);

server.use(jsonServer.rewriter({
  '/api/users': '/users'
}));

server.post('/post/user', (req, res) => {
  if (req.method === 'POST') {
    let userId = req.body['userId'];
    if (userId != null && userId >= 0) {
      let result = db.users.find(user => {
        return user.userId == userId;
      })

      if (result) {
        let {id, ...user} = result;
        res.status(200).jsonp(user);
      } else {
        res.status(400).jsonp({
          error: "Bad userId"
        });
      }
    } else {
      res.status(400).jsonp({
        error: "No valid userId"
      });
    }
  }
});

server.get('/get/user', (req, res) => {
  if (req.method === 'GET') {
    let userId = req.query['userId'];
    if (userId != null && userId >= 0) {
      let result = db.users.find(user => {
        return user.userId == userId;
      })

      if (result) {
        let {id, ...user} = result;
        res.status(200).jsonp(user);
      } else {
        res.status(400).jsonp({
          error: "Bad userId"
        });
      }
    } else {
      res.status(400).jsonp({
        error: "No valid userId"
      });
    }
  }
});

server.use(router);
server.listen(port);
