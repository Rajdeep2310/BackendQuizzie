const mongoose = require('mongoose');
const mongoCon = () =>{
    if(process.env.DB_URL){
        mongoose.connect(process.env.DB_URL).then(()=>{
            console.log("Mongodb connected successfully");
        })
    }else {
        console.log("DB URL is not valid")
    }
}

module.exports = mongoCon;