import React, { useReducer } from "react";

const initState = {
    job: '',
    jobs: []
}

const addJob = (data) =>
{
    return {
        type: 'ADD_JOB',
        data
    }
}
const setJob = (data) =>
{
    return {
        type: 'SET_JOB',
        data
    }
}
const deleteJob = (data) =>
{
    return {
        type: 'DELETE_JOB',
        data
    }
}


function reducer(state, action)
{
    switch (action.type)
    {
        case 'SET_JOB':
            return {
                ...state, job: action.data
            }
        case 'ADD_JOB':
            return {
                ...state,
                jobs: [ ...state.jobs, action.data ]
            }
        case 'DELETE_JOB':
            const newJobs = [ ...state.jobs ];
            newJobs.splice(action.data, 1);
            return {
                ...state,
                jobs: newJobs
            }
        default:
            throw new Error('Invalid action')
    }
}

function Todo()
{

    const [ state, dispatch ] = useReducer(reducer, initState);
    const { job, jobs } = state;

    const handleAdd = () =>
    {
        dispatch(addJob(job));
        dispatch(setJob(''));
    }

    return (
        <>
            <div>
                <input
                    placeholder="Enter a job"
                    autoComplete="off"
                    value={job}
                    onChange={e =>
                        dispatch(setJob(e.target.value))
                    }
                />
                <button
                    onClick={handleAdd}
                >Add</button>
            </div>
            <div>
                <ul>
                    {
                        jobs.map((el, index) => (
                            <li key={index}>{el}<span
                                onClick={(e) =>
                                {
                                    dispatch(deleteJob(index))
                                }}
                            > x</span></li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}
export default Todo;