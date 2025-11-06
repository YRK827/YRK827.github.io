import * as http from 'node:http'
import * as fs from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path'

// ES Module
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
console.log('현재 파일 디렉터리:', __dirname)

const configData = await fs.readFile(`${__dirname}/config.json`, 'utf-8')
const config = JSON.parse(configData)
const rootdir = config.rootdir
// const rootdir = '/Users/uhd/LOCAL/3.STUDIES/Node.js/Yerin/YRK827.github.io/assignments/www'

const PORT = 8080

// Create a local server to receive data from
const server = http.createServer(async (req, res) => {
  console.log('received request!')
  console.table({ url: req.url })

  const reqPath = req.url == '/' ? '/index.html' : req.url
  let filehandle

  try {
    filehandle = await fs.open(`${rootdir}${reqPath}`, 'r')
  }
  catch(err) {
    console.error(err)
    res.writeHead(404, { 'Content-Type': 'text/html' })
    res.end('<h1>Not found</h1>\n<a href="/">main</a>\n')

    return
  }

  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.end(await filehandle.readFile('utf-8'))

  filehandle.close()
})

server.listen(PORT, () => console.log(`http://localhost:${PORT}/`))