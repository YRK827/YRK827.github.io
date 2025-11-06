import * as http from 'node:http'
import * as fs from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path'

// ES Module
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
console.log('현재 파일 디렉터리:', __dirname)

const PORT = 8080

// Create a local server to receive data from
const server = http.createServer(async (req, res) => {
  console.log('received request!')

  let filehandle

  if (req.url == '/') {
    filehandle = await fs.open(`${__dirname}/index.html`, 'r')

    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end(await filehandle.readFile('utf-8'))
  }
  else if (req.url == '/section_0.html') {
    filehandle = await fs.open(`${__dirname}/section_0.html`, 'r')

    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end(await filehandle.readFile('utf-8'))
  }
  else {
    res.writeHead(404, { 'Content-Type': 'text/html' })
    res.end('<h1>Not found</h1>\n<a href="/">main</a>\n')
  }

  filehandle.close()
})

server.listen(PORT, () => console.log(`http://localhost:${PORT}/`))