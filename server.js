const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);
server.listen(port);


// TO DO

// git add .
// git commit -m"add infos"
// git push origin HEAD
// git push heroku main
// heroku open