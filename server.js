const http = require('http')

const server = http.createServer((req, res) => {
    handleRequest(req, res)
})

const PORT = process.env.PORT || 5000
server.listen(PORT, () => {
    console.log("Running on port 5000")
})
