const express = require('express')
const path = require('path')
const app = express()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
  })

app.get('/about', (req, res) => {
res.sendFile(path.join(__dirname, 'about.html'))
})

app.get('/contact-me', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact-me.html'))
    })

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '404.html'))
})

// const page404 = fs.readFileSync('404.html', 'utf8', (err, data) => {
//     if (err) throw err
//     return data
// })

// http.createServer(function (req, res) {
//     const q = url.parse(req.url, true)
//     let filename = ""

//     if (q.pathname === "/") {
//         filename = "." + '/index.html'
//     } else {
//         filename = "." + q.pathname
//     }

//     fs.readFile(filename, function(err, data) {
//       if (err) {
//         res.writeHead(404, {'Content-Type': 'text/html'})
//         res.write(page404)
//         return res.end()
//       } else {
//         res.writeHead(200, {'Content-Type': 'text/html'})
//         res.write(data)
//         return res.end()
//       }
//   })
//   }).listen(8080); //the server object listens on port 8080

const PORT = 3000
app.listen(PORT, () => {
console.log(`Running on http://localhost:${PORT}`)
})