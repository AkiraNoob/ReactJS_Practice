import React, { useRef, useState } from "react";
import CommentLog from "./CommentLog";

function CommentInput({ id })
{
    const [ comment, setComment ] = useState('');

    const lastLog = useRef();
    const input = useRef();

    const handleSubmitComment = () =>
    {
        if (comment)
        {
            let storageComment = [];
            if (localStorage.getItem(`comments-${id}`))
            {
                storageComment = JSON.parse(localStorage.getItem(`comments-${id}`));
            }

            const newComment = [ ...storageComment, comment ];
            localStorage.setItem(`comments-${id}`, JSON.stringify(newComment));

            lastLog.current = newComment;

            setComment('');
            input.current.focus();
        }
    }

    return (
        <div>
            <input
                ref={input}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
            />
            <button
                onClick={handleSubmitComment}
            >Comment</button>
            <CommentLog
                lastLog={lastLog.current}
                id={id}
            />
        </div>
    )
}

export default CommentInput;