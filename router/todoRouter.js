let todoService = require("../service/todoService");
let express = require("express");
let router = express.Router();

/**
 *  post请求,添加数据 数据在请求体中携带,为json格式
 *  http://localhost/todo/
 *
 */
router.post("/", async (request, response) => {
    //获取请求的数据
    let body = request.body;
    let result = await todoService.addTodo(body);

    response.success(result)
    // response.send({
    //     code: 1,
    //     msg: "操作成功",
    //     data: result
    // })
});

/**
 *  delete 删除数据,数据在请求路径中
 *  id的前面一定要加冒号!!!!!
 */
router.delete("/:id", async (request, response) => {
    //获取路径中的参数
    let id = request.params.id;
    await todoService.deleteTodo(id);

    response.success()
    // response.send({
    //     code: 1,
    //     msg: "操作成功",
    //     data: result
    // })
});

/**
 * put 更新  根据id更新传送的数据
 */
router.put("/:id", async (request, response) => {
    //获取路径中的参数
    let id = request.params.id;
    let body = request.body;
    await todoService.updateTodo(id, body);
    response.success()
    // response.send({
    //     code: 1,
    //     msg: "操作成功",
    //     data: result
    // })
});

router.get("/", async (request, response) => {
    //获取请求的数据
    let result = await todoService.findAll();
    response.success(result)
    // response.send({
    //     code: 1,
    //     msg: "操作成功",
    //     data: result
    // })
});


module.exports = router;

