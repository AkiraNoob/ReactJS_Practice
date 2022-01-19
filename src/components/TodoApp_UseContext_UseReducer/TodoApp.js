import { useContext, useEffect } from 'react'
import { TodoContext } from './Context'
import * as action from './Action'

function TodoApp()
{
    const [ state, dispatch ] = useContext(TodoContext);
    const { todoInput, todos } = state;

    const handleSetInput = (e) =>
    {
        dispatch(action.toSetTodoInput(e.target.value))
    }

    const handleAddTodo = () =>
    {
        if (todoInput)
        {
            dispatch(action.toAddEachTodo(todoInput));
            dispatch(action.toSetTodoInput(''))
        }
    }

    const handleDeleteTodo = (index) =>
    {
        dispatch(action.toDeleteEachTodo(index));
    }

    useEffect(() =>
    {
        console.log(todos);
    }, [ todos ])

    return (
        <>
            <input
                value={todoInput}
                placeholder="Enter a job"
                onChange={handleSetInput}
            />
            <button
                onClick={handleAddTodo}
            >Add</button>
            <ul>
                {todos.map((el, index) =>
                    <li key={index}>{el}<span
                        style={{
                            cursor: 'pointer'
                        }}
                        onClick={() => handleDeleteTodo(index)}
                    > x</span></li>
                )}
            </ul>
        </>
    )
}

export default TodoApp