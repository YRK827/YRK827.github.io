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

  const rawURLs = req.url.split('?')
  const reqPath = rawURLs[0] == '/' ? '/index.yrk' : rawURLs[0]
  // const rawParams = rawURLs[1] ? JSON.parse(`{"${rawURLs[1].replaceAll('=', '":"').replaceAll('&', '","')}"}`) : null
  // const isUser = (rawParams?.id == 'yrk' && rawParams?.pw == '1234') ? 'user' : 'none'

  const rawParams = rawURLs[1] ? JSON.parse(`{"${rawURLs[1].replaceAll('=', '":"').replaceAll('&', '","')}"}`) : null
  const isUser = (rawParams?.id == 'yrk' && rawParams?.pw == '1234') ? 'user' : 'none'
  
  let filehandle = await fs.open(`${rootdir}/__layout/header_${isUser}.yrk`, 'r')

  const header = await filehandle.readFile('utf-8')

  try {
    filehandle = await fs.open(`${rootdir}${reqPath}`, 'r')
  }
  catch(err) {
    console.error(err)
    res.writeHead(404, { 'Content-Type': 'text/html' })
    res.end(`${header}<h1>Not found: ${reqPath}</h1>\n<a href="/">main</a>\n`)

    filehandle.close()
    
    return
  }

  const body = await filehandle.readFile('utf-8')
  const templateClient = `<@header@>(id: <@id@>)<@body@>`

  //#region template logic
  let hHtml = header.replaceAll('<@name@>', 'yerin')
  let html = templateClient.replaceAll('<@id@>', rawParams?.id ?? '')
  //#endregion template logic

  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.end(
    html
    .replaceAll('<@header@>', hHtml)
    .replaceAll('<@body@>', body)
  )

  filehandle.close()

  // res.writeHead(200, { 'Content-Type': 'text/html' })
  // res.end(`<h1>Page URL: ${reqPath}</h1>`)
})

server.listen(PORT, () => console.log(`http://localhost:${PORT}/`))