import * as http from 'node:http'

const PORT = 8080

// Create a local server to receive data from
const server = http.createServer((req, res) => {
console.log('received request!')

  if (req.url == '/'){
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end(`<h1>Hello World</h1>\n<a href="/section_0.html">section 0</a>\n`)
  }
  else if (req.url == '/section_0.html'){
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end(`<h1>Section 0</h1>\n<a href="/">main</a>\n`)
  }
  else {
    res.writeHead(404, { 'Content-Type': 'text/html' })
    res.end(`<h1>Not Found</h1>\n<a href="/">main</a>\n`)
  }
})

server.listen(PORT, () => console.log(`http://localhost:${PORT}/`))