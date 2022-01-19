import React, { useLayoutEffect, useState } from 'react';
import CommentInput from './CommentInput';

function Comment()
{
    const courses = [
        {
            id: 1,
            name: "Javascript"
        },
        {
            id: 2,
            name: "ReactJS"
        },
        {
            id: 3,
            name: "VueJS"
        },
        {
            id: 4,
            name: "Angular 2"
        }
    ]

    const [ enable, setEnable ] = useState(1);

    useLayoutEffect(() =>
    {
        return () =>
        {
            localStorage.clear();
        }
    }, [])

    return (
        <div>
            <ol>
                {courses.map((el) =>
                    <li
                        style={{
                            color: el.id === enable ?
                                "red" : "black"
                        }}
                        onClick={() => { setEnable(el.id) }}
                        key={el.id}
                    >{el.name}</li>
                )}
            </ol>
            <CommentInput
                id={enable}
            />
        </div>
    )
}

export default Comment;