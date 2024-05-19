import React, { useState } from "react"
import { useEffect } from "react";
import { weather, weatherResponse } from "./weather";

export const WeatherApp: React.FC = (): JSX.Element => {
    const [WeatherResponses, setWeatherResponse] = useState<weatherResponse | null>(null);
    const [location, setlocation] = useState<string>("")
    const [error,seterror]=useState<string | null>(null)
    useEffect(() => {
        const forecastWeather = async () => {
            if (location) {
                try{
                const details = await weather(location);
                setWeatherResponse(details)
                seterror(null)
                console.log(details);
                }
                catch(error){
                    setWeatherResponse(null);
                    seterror("not found")
                }
            }
        }
        forecastWeather()
    }, [location])
    return (
        <><div>
            <form>
                <input type="text" onChange={(event) => { setlocation(event.target.value) }}></input>
                <input type="submit" value="search"></input>
            </form>
            {/* <select value={location} onChange={(event) => { setlocation(event.target.value)}}>
                <option value="Delhi">Delhi</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Narasaraopet">Narasaraopet</option>
            </select> */}
            {error && <p style={{ color: "red" }}>{error}</p>}
            {WeatherResponses && (
                <div>
                    <p>Name: {WeatherResponses?.name}</p>
                    <p>min Temp: {WeatherResponses?.min_temp}</p>
                    <p>max Temp: {WeatherResponses?.max_temp}</p>
                </div>
            )}
        </div>
        </>
    )
}


// import React, { useState } from "react"
// import { useEffect } from "react";
// import { weather, weatherResponse } from "./weather";

// export const WeatherApp: React.FC = (): JSX.Element => {
//     const [WeatherResponses, setWeatherResponse] = useState<weatherResponse | null>(null);
//     const [location, setlocation] = useState<string>("")
//     useEffect(() => {
//         const forecastWeather = async () => {
//             if (location) {
//                 const details = await weather(location);
//                 setWeatherResponse(details)
//                 console.log(details);
//             }
//         }
//         forecastWeather()
//     }, [location])
//     return (
//         <><div>
//             {/* <form>
//                 <input type="text" onChange={(event) => { setlocation(event.target.value) }}></input>
//                 <input type="submit" value="search"></input>
//             </form> */}
//             <select value={location} onChange={(event) => { setlocation(event.target.value)}}>
//                 <option value="Delhi">Delhi</option>
//                 <option value="Mumbai">Mumbai</option>
//                 <option value="Narasaraopet">Narasaraopet</option>
//             </select>
//             {WeatherResponses && (
//                 <div>
//                     <p>{WeatherResponses?.name}</p>
//                     <p>{WeatherResponses?.min_temp}</p>
//                     <p>{WeatherResponses?.max_temp}</p>
//                 </div>
//             )}
//         </div>
//         </>
//     )
// }
