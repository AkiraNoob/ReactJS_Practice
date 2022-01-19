import './style.scss'

function GlobalCSS({ children })
{
    return (
        <div className={'d-flex'}>
            {children}
        </div>
    )
}

export default GlobalCSS