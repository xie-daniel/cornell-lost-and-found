import { useEffect, useState } from "react";
import { WeatherResponse } from "@full-stack/types";
import { coinflip } from "@full-stack/common";
import { BACKEND_BASE_PATH } from "../constants/Navigation";

const getWeather = (): Promise<WeatherResponse> =>
    fetch(`${BACKEND_BASE_PATH}/weather`).then((res) => res.json());

const Report = () => {
    const [{ raining }, setRaining] = useState<WeatherResponse>({
        raining: coinflip(),
    });

    useEffect(() => {
        console.log("Loading weather...");
        getWeather().then((data) => setRaining(data));
    }, []);

    return (
        <center>
            <h1>Report Lost Item</h1>
            <p>{raining ? "Yes" : "No"}</p>
        </center>
    );
};

export default Report;
