import { useContext } from 'react';
import Content from './Content/Content';
import { ThemeContext } from './ThemeContext';

function Theme()
{
    const { handleChangeTheme } = useContext(ThemeContext);
    return (
        <>
            <button onClick={handleChangeTheme}>Toggle theme</button>
            <Content />
        </>
    )
}
export default Theme;