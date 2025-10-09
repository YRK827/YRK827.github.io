import * as http from 'node:http'

const PORT = 8080

// Create a local server to receive data from
const server = http.createServer((req, res) => {
  console.log(req)

  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.end(`<h1>Hello World</h1>\n<a href="https://google.com">Google</a>\n`)
})

server.listen(PORT, () => console.log(`http://localhost:${PORT}/`))