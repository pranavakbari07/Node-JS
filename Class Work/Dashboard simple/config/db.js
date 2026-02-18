const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://pranav:pranav_123@cluster0.hgwfc89.mongodb.net/?appName=Cluster0").then(()=>{
    console.log("db connected");
}).catch((err)=>{
    console.log(err);
})

// const db = mongoose.connection

// db.once("open",(err)=>{
//     err ? console.log(err): console.log("db is connected ");
// })

// module.exports= db