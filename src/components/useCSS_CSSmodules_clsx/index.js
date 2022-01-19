import Button from './Button'
import GlobalCSS from './GlobalCSS'

function SampleCSS()
{
    return (
        <>
            <GlobalCSS>
                <Button />
                <Button primary />
                <Button secondary />
                <Button success />
            </GlobalCSS>
        </>
    )
}

export default SampleCSS