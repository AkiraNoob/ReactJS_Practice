import { useEffect, useState } from "react"
import weatherApi from "./api/weatherApi"

function Weather() {
    const [ weather, setWeather ] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const res = await weatherApi.get();
                setWeather(res);
                console.log(res);
            } catch (error) {
                console.error(error);
            }
        })();
    }, [])

    return (
        <div>
            <h1>This is Weather Page</h1>
            <div>
                {weather.length > 0 && weather.map(({ date, temperatureC, temperatureF, summary }, index) => {
                    return (
                        <p key={index}>On {date}, the temperature in C-deg is {temperatureC} and {temperatureF} in F-deg, summary is {summary}</p>
                    )
                })}
            </div>
        </div>
    )
}

export default Weather