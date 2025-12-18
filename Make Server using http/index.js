const http = require("http")
const port = 2438

const requestHandler = (req,res)=>{
    res.write(`Hello This is Node Server on port...${port}`)
    res.end()
}


const server = http.createServer(requestHandler)

server.listen(port,(err)=>{
    err ? console.log(err) : console.log(`Server is running on port ${port}`,)
})