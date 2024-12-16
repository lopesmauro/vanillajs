const { getUsers } = require('../controllers/userController')

const handleRequest = (req, res) => {
  if (req.url === '/api/users' && req.method === 'GET') {
    getUsers(req, res)
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ error: 'Route not found.' }))
  }
}

module.exports = handleRequest
