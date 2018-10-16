let todoService = require("../service/todoService");
require("../db");

async function testService() {
    //测试添加
    // let todo = {content: "今天准备去爬山"};
    // let result = await todoService.addTodo(todo);

    // let todo = {content: "明天准备去唱歌"};
    // let result = await todoService.addTodo(todo);

    //测试查询
    // let result = await todoService.findAll()

    //测试更新
    // await todoService.updateTodo("5bc5de51451dec0c7cda35de",{content:"今天准备吃火锅"});
    //测试删除
    await todoService.deleteTodo("5bc5de51451dec0c7cda35de");



}

testService();