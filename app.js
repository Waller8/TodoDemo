require("express-async-errors");    //这个必须在最顶端
const express = require("express");
//日志
const morgan = require("morgan");
let todoRouter = require("./router/todoRouter");
require("./db");
let config = require("./config");
let app = express();

//使用日志功能
app.use(morgan("combined"));
//解析json格式的数据
app.use(express.json());
// 使用自定义的加强response的中间件
app.use(require("./middleware/response_md"));
//挂载自定义router
app.use("/todo", todoRouter);


//处理全局中间件
app.use((err, request, response, next) => {

    //写出失败的响应
    response.fail(err)

});

app.listen(config.port);