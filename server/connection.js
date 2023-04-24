const mongoose = require("mongoose");

const db_uri = "mongodb://coffer123:coffer123@ac-3lreedo-shard-00-00.wuon8z8.mongodb.net:27017,ac-3lreedo-shard-00-01.wuon8z8.mongodb.net:27017,ac-3lreedo-shard-00-02.wuon8z8.mongodb.net:27017/?ssl=true&replicaSet=atlas-w5ak1p-shard-0&authSource=admin&retryWrites=true&w=majority"

mongoose.connect(db_uri, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("DB connected")
}).catch((e) => {
    console.log(e.message);
})

