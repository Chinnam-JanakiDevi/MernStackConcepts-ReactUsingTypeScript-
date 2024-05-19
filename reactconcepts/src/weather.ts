import axios from "axios";
import { promises } from "dns";
const api_key = "322f5ac85c8f38253523c0754aa5c89a"
// https://api.openweathermap.org/data/2.5/weather?q=Narasaraopet&appid=322f5ac85c8f38253523c0754aa5c89a
export interface weatherResponse {
    name: string,
    min_temp: number,
    max_temp: number
}
export const weather = async (location: string): Promise<weatherResponse> => {
    const results = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
        params: {
            appid: api_key,
            q: location
        }

    })
    // console.log(results);
    return {
        name: results.data.name,
        min_temp: results.data.main.temp_min,
        max_temp: results.data.main.temp_max
    }
}

// weather("Narasaraopet")

