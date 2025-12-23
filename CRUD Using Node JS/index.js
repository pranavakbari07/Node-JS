const express = require("express")
const port = 3000

const app = express()

let arr = []

app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.render("index",{arr})
})

app.post("/adddata",(req,res)=>{
    let obj = {
        id : Data.now(),
        ...req.body
    }
    arr.push(obj)
    res.redirect("/")
})


app.get("/about", (req, res) => {
    res.render("about")
})

app.listen(port, (err) => {
    err ? console.log(err) : console.log(`Server is running on port ${port}`)
})
