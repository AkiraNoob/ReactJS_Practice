import React, { useState, useCallback } from "react"
import Button from "./Button";

function Frame()
{
    const [ count, setCount ] = useState(0);

    const handleIncrease = useCallback(() =>
    {
        setCount(prevCount => prevCount + 1);
    }, [])

    return (
        <div>
            <h1>{count}</h1>
            <Button handleIncrease={handleIncrease} />
        </div>
    )
}

export default Frame;