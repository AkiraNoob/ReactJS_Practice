import React, { useLayoutEffect, useRef, useMemo, useState } from 'react';

function Bill()
{
    const [ name, setName ] = useState('');
    const [ price, setPrice ] = useState('');
    const [ list, setList ] = useState([]);

    const total = useMemo(() =>
    {
        const result = list.reduce((sum, { price }) =>
        {
            return sum + price;
        }, 0)
        return result;
    }, [ list ]);

    const inputRef = useRef();

    const handleSubmit = () =>
    {
        if (name && price)
        {
            setList(prev =>
            {
                return [ ...prev, { name, price: +price } ];
            });
        }
        setName('');
        setPrice('');
        inputRef.current.focus();
    }

    useLayoutEffect(() =>
    {
        console.log(list);
    }, [ list ])

    return (
        <>
            <form
                action='#'
                onSubmit={handleSubmit}
            >
                <div
                    style={{
                        margin: '10px 0',
                    }}
                >
                    <label
                        htmlFor='name'
                    >Tên hàng hoá </label>
                    <input
                        value={name}
                        autoComplete='off'
                        placeholder='Nhập tên hàng'
                        onChange={(e) => { setName(e.target.value) }}
                        id='name'
                        ref={inputRef}
                    />
                </div>
                <div
                    style={{
                        margin: '10px 0',
                    }}
                >
                    <label
                        htmlFor='price'
                    >Giá hàng hoá </label>
                    <input
                        value={price}
                        autoComplete='off'
                        placeholder='Nhập giá hàng'
                        onChange={(e) => { setPrice(e.target.value) }}
                        id='price'
                    />
                </div>
                <div>
                    <input type='submit' value='Submit' />
                </div>
            </form>
            <div>
                <p>Total: {total}</p>
            </div>
            <div>
                {list.map(({ name, price }, index) =>
                    <p key={index}>{`${name} - ${price}`}</p>
                )}
            </div>
        </>
    )
}
export default Bill;