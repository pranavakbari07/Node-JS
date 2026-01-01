const express = require("express")
const port = 2005;
const path = require("path")

const app = express()

let arr = []

// app.get("/",(req,res)=>{
//     res.write("<h1>Hello World</h1>")
//     res.end()
// })

app.set("view engine","ejs")
app.use(express.urlencoded({extended:true}))
app.use("/",express.static(path.join(__dirname,"public")))

const middleware = (req,res,next)=>{
    console.log("This is middleware");
    next()
}

app.get("/",(req,res)=>{
    res.render("index",{arr})
})

app.post("/addData",middleware,(req,res)=>{
    let obj = {
        id : Date.now(),
        ...req.body
    }
    arr.push(obj)
    res.redirect("/")
})




app.get("/deleteData/:id",(req,res)=>{
    let newData = arr.filter((item)=> item.id != req.params.id)
    arr = newData
    res.redirect("/")
})

app.get("/editData",(req,res)=>{
    let singleData = arr.find((item)=> item.id == req.query.id)
    res.render("edit",{singleData})
})

app.post("/updateData",(req,res)=>{
    let singleData =  arr.find((item)=> item.id == req.body.id)
    singleData.name = req.body.name
    singleData.age = req.body.age
    singleData.city = req.body.city
    
    res.redirect("/")
})

app.listen(port,(err)=>{
    err ? console.log(err) : console.log(`Server is running on port ${port}`)

})