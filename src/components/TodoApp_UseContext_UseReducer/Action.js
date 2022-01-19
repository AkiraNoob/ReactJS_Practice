import * as constant from './Constant'

export const toSetTodoInput = (data) =>
{
    return {
        type: constant.SET_TODO_INPUT,
        data
    }
}
export const toAddEachTodo = (data) =>
{
    return {
        type: constant.ADD_EACH_TODO,
        data
    }
}
export const toDeleteEachTodo = (data) =>
{
    return {
        type: constant.DELETE_EACH_TODO,
        data
    }
}
