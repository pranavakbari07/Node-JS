const express = require("express")
const port = 2438;

const app = express()

// app.get("/",(req,res)=>{
//     res.write("<h1>Hello World</h1>")
//     res.end()
// })

app.set("view engine","ejs")

app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/about",(req,res)=>{
    res.render("about")
})
app.get("/contact",(req,res)=>{
    res.render("contact")
})


app.listen(port,(err)=>{
    err ? console.log(err) : console.log(`Server is running on port ${port}`)

})