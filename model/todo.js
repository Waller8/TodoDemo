let mongoose = require("mongoose");

let schema = new mongoose.Schema({
    //待办事项
    content: {
        type: String,
        required: [true, "此字段必须填写,不能为空"],  //此字段必须存在
        unique: [true, "此字段不能重复"]    //此字段不能重复,唯一
    },
    isDone: {
        type: String,
        default: false   //设置默认值
    },
    createTime: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model("todo", schema);