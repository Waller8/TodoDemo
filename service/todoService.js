let Todo = require("../model/todo");

/**
 * http://localhost/todo/
 * @param todo
 * @returns {Promise<*>}
 *  post  添加
 */
async function addTodo(todo) {
    //判断需要添加的数据是否存在
    let result = await Todo.findOne({content: todo.content});
    if (result) {
        //存在就抛出异常
        throw Error("数据已经存在")
    }
    result = await Todo.create(todo);
    return result;
}

/**
 *
 * @param id 要删除的id
 * @returns {Promise<*>}
 *  delete  删除
 */
//dedlete 请求
async function deleteTodo(id) {
//根据id查找数据是否存在
    await   isExistById(id);

    let result = await Todo.deleteOne({_id: id});
    if (result.n !== 1) {
        throw Error(`删除ID为${id}的数据发生错误`)    // `` 这是原样字符串
    }
    return result;
}

/***
 *
 * @param id
 * @param todo
 * @returns {Promise<*>}
 */
async function updateTodo(id, todo) {
    //根据id判断需要更新的是否存在
    await isExistById(id);
    let result = await Todo.updateOne({_id: id}, todo);

    if (result.n !== 1) {
        throw Error(`删除ID为${id}的数据发生错误`)    // `` 这是原样字符串
    }
    return result;
}

/**
 *  get请求   查找所有数据
 * @param id    查找所需的id
 * @returns {Promise<*>}
 */
async function findAll() {
    //根据ID查找,判断是否存在
    let result = await Todo.find();

    return result;
}

/**
 *  根据id查找数据
 * @param id
 * @returns {Promise<*>}
 */
async function isExistById(id) {
    let result = await Todo.findOne({_id: id});
    if (result) {
        throw Error(`ID为${id}的数据不存在`)
    }
}


module.exports = {
    addTodo,
    deleteTodo,
    updateTodo,
    findAll,
}
