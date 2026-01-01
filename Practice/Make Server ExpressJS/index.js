const express = require("express")
const port = 1008

const app = express()

let arr = []  

app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }))


app.get("/", (req, res) => {
    res.render("index", {arr} )
})


app.post("/addData", (req,res)=>{
    let obj = {
        id: Date.now(),
        ...req.body
    }
    arr.push(obj);
    res.redirect("/")
})

app.get("/deleteData/:id",(req,res)=>{
    let newData = arr.filter((item) => item.id != req.params.id)
    arr = newData
    res.redirect("/")
})

app.get("/editData/:id",(req,res)=>{
    let singleData = arr.find((item)=> item.id == req.query.id)
    res.render("edit",{singleData})
})  

app.listen(port, (err) => {
    err ? console.log(err) : console.log(`Server is running on port ${port}`)
})



