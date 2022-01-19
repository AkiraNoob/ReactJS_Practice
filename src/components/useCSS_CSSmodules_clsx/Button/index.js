import clsx from 'clsx'
import styles from './style.module.scss'

function Button({ content = 'Click me', primary, secondary, success })
{
    const className = clsx(styles.btn, {
        [ styles.btnPrimary ]: primary,
        [ styles.btnSecondary ]: secondary,
        [ styles.btnSuccess ]: success
    }, 'font');

    return (
        <button className={className}>{content}</button>
    )
}

export default Button