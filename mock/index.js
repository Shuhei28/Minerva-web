const jsonServer = require('json-server')

const server = jsonServer.create()
const router = jsonServer.router('mock/mock.json')

server.use(jsonServer.defaults())

server.use(jsonServer.rewriter({
  "/api/*": "/$1",
  "/auth/tokens": "/tokens"
}))

server.get('/tokens', (req, res) => {
  res.jsonp({
    "token_type"  : "Bearer",
    "access_token": Math.random(),
    "user_id"     : 1
  })
})

server.use(router)

server.listen(3001)
