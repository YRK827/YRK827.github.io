import * as http from 'node:http'

const PORT = 8080

// Create a local server to receive data from
const server = http.createServer(async (req, res) => {
  console.log('received request!')
  
  let filehandle 

  if (req.url == '/'){
    filehandle = await open('index.html', 'r')

    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end(filehandle.read())
  }
  else if (req.url == '/section_0.html'){
    filehandle = await open('section_0.html', 'r')
    
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end(``)
  }
  else {
    res.writeHead(404, { 'Content-Type': 'text/html' })
    res.end(`<h1>Not Found</h1>\n<a href="/">main</a>\n`)
  }
})

server.listen(PORT, () => console.log(`http://localhost:${PORT}/`))