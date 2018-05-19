const http = require('http')
const file = require('fs')

let server = http.createServer((req, res) => {
  file.readFile('./index.html', (err, fi) => {
    res.end(fi)
  })

  

})

server.listen(80)
