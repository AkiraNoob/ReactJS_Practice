import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

function Paragraph()
{
    const { theme } = useContext(ThemeContext);
    return (
        <p className={theme}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula nunc at blandit luctus. Integer dignissim enim accumsan urna consequat varius. Integer ac dui ipsum. Pellentesque dolor tellus, auctor scelerisque commodo eget, convallis vitae urna. Suspendisse sit amet efficitur sem, id pellentesque odio. Aliquam a molestie nibh. Duis tincidunt magna in ligula maximus, nec iaculis quam tincidunt.
        </p>
    )
}

export default Paragraph;