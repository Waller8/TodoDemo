let mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/todo", {useNewUrlParser: true});
let db = mongoose.connection;

db.on('error', (err) => {
    console.log(err);
});

db.once("open", () => {
    console.log("连接成功")
});

