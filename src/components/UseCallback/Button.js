import React, { memo } from "react";

function Button({ handleIncrease })
{
    console.log('re render');
    return (
        <>
            <button
                onClick={handleIncrease}
            >Increase</button>
        </>
    )
}

export default memo(Button);