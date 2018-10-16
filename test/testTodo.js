let todoService = require("../service/todoService");
require("../db");

async function testService() {
    //测试添加
    let todo = {content: "今天准备去爬山"};
    let result = await todoService.addTodo(todo);
}

testService();