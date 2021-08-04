const http = require('http')

const servers = http.createServer((req, res)=>{
    if (req.url === '/'){
        res.end('<h1>WHat is up boys</h1>')
    }
    if (req.url === '/about'){
        res.end('<h1> hey u reached my inbox</h1>')
    }
    res.end(`<h1> OPPS </h1>
    <p>WHat are you looking for</p>
    <a href = '/'>BACK </a>
    <a href = '/about'> Yes</a>
    `)
})


servers.listen(4000)