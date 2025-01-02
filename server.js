const app = require("./app")

const mongooes = require("mongoose");
const { MONGODB_URL , PORT } = require("./utlits/config");


mongooes.connect(MONGODB_URL)
.then(()=>{
    console.log("connect")
    app.listen(PORT,()=>{
        console.log('server start at http://127.0.0.1:3000');
    })
})
.catch((error)=>{
    console.log("database not connect",error);
})





 