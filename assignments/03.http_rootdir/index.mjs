import * as http from 'node:http'
import * as fs from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path'

// ES Module
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
console.log('현재 파일 디렉터리:', __dirname)

const rootdir = __dirname

const PORT = 8080

// Create a local server to receive data from
const server = http.createServer(async (req, res) => {
  console.log('received request!')
  console.table({ url: req.url })

  const reqPath = req.url == '/' ? '/index.html' : req.url 
  let filehandle

  // const filehandle = await fs.open(`${__dirname}${req.url}`, 'r')

  try {
    const filehandle = await fs.open(`${__dirname}${reqPath}`, 'r')
  }
  catch(err){
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