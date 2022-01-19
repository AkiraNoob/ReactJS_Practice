import React, { useLayoutEffect, useState, memo } from 'react';

function CommentLog({ id, lastLog }) {
    console.log(`render`);
    const [ currentLog, setCurrentLog ] = useState(() => {
        let currentLocalStorage = [ 'Start comment now!' ];
        if (localStorage.getItem(`comments-${id}`) != undefined) {
            currentLocalStorage = JSON.parse(localStorage.getItem(`comments-${id}`));
        }

        return currentLocalStorage;
    })

    useLayoutEffect(() => {
        setCurrentLog(() => {
            let currentLocalStorage = [ 'Start comment now!' ];
            if (localStorage.getItem(`comments-${id}`) != undefined) {
                currentLocalStorage = JSON.parse(localStorage.getItem(`comments-${id}`));
            }
            return currentLocalStorage;
        })
    }, [ lastLog, id ])

    return (
        <div key={id}>
            <ul>
                {currentLog.map((el, index) =>
                    <li
                        key={index}
                    >{el}</li>
                )}
            </ul>
        </div>
    )
}

export default memo(CommentLog);