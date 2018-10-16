require("express-async-errors");    //这个必须在最顶端
const express = require("express");
//日志
const morgan = require("morgan");
let todoRouter = require("./router/todoRouter");
require("./db");
let app = express();

//使用日志功能
app.use(morgan("combined"));

//解析json格式的数据
app.use(express.json());
//挂载自定义router
app.use("/todo", todoRouter);


//处理全局中间件
app.use((err, request, response, next) => {
    response.send({
        code: -1,
        msg: "操作失败",
        data: err.toString()
    })
});

app.listen(8000);