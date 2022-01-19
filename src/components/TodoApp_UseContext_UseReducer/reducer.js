import * as constant from './Constant'

const initState = {
    todoInput: '',
    todos: JSON.parse(localStorage.getItem('todos')) || []
}

function reducer(state, action)
{
    switch (action.type)
    {
        case constant.SET_TODO_INPUT:
            return {
                ...state,
                todoInput: action.data
            }
        case constant.ADD_EACH_TODO:
            const newAddedTodos = [ ...state.todos, action.data ];
            localStorage.setItem('todos', JSON.stringify(newAddedTodos));
            return {
                ...state,
                todos: newAddedTodos
            }
        case constant.DELETE_EACH_TODO:
            const newDeletedTodos = [ ...state.todos ];
            newDeletedTodos.splice(action.data, 1);
            localStorage.setItem('todos', JSON.stringify(newDeletedTodos));
            return {
                ...state,
                todos: newDeletedTodos

            }
        default:
            throw new Error('Invalid Action');
    }
}

export default reducer
export { initState }