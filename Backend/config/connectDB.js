const mongoose = require("mongoose")

 const connectDB=()=>{
    mongoose.connect(process.env.DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then((con)=>{
        console.log("Mongo DB connected successfully on host :"+con.connection.host);
    })
}
module.exports =connectDB;
