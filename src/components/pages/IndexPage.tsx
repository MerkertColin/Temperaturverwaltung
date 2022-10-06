import { FunctionComponent, useEffect, useState } from "react";
import { blob } from "stream/consumers";
import { Sensor } from "../../interfaces/interfaces";
import Card from "../Card";
import "../../styles/IndexPage.css"

interface IndexProps {
    
}
 
const Index: FunctionComponent<IndexProps> = () => {
    const [sensors, setSensors] = useState<Sensor[]>([
        {
            ID: 0,
            server: 0,
            manufacturer: "test_man",
            highestTemp: 30.0,
            maxTemp: 35.0,
            currentTemp: 40.0,
            averageTemp:20.0,
            lastTenTemps: [
                {
                    value: 20.0,
                    time: "05.10.2022 09:16:10"
                },
                {
                    value: 20.0,
                    time: "05.10.2022 09:16:10"
                },
                {
                    value: 20.0,
                    time: "05.10.2022 09:16:10"
                },
                {
                    value: 20.0,
                    time: "05.10.2022 09:16:10"
                },
                {
                    value: 20.0,
                    time: "05.10.2022 09:16:10"
                }
            ]
        },
        {
            "ID": 1,
            "server": 0,
            "manufacturer": "test_man",
            "highestTemp": 30.0,
            "maxTemp": 35.0,
            "currentTemp": 29.5,
            "averageTemp": 20.0,
            "lastTenTemps": [
                {
                    "value": 20.0,
                    "time": "05.10.2022 09:16:10"
                },
                {
                    "value": 21.0,
                    "time": "05.10.2022 09:16:10"
                },
                {
                    "value": 21.4,
                    "time": "05.10.2022 09:16:10"
                },
                {
                    "value": 22.0,
                    "time": "05.10.2022 09:16:10"
                },
                {
                    "value": 23.0,
                    "time": "05.10.2022 09:16:10"
                }
            ]
        },
        {
            "ID": 2,
            "server": 0,
            "manufacturer": "test_man",
            "highestTemp": 29.0,
            "maxTemp": 35.0,
            "currentTemp": 32.0,
            "averageTemp": 20.0,
            "lastTenTemps": [
                {
                    "value": 36.0,
                    "time": "05.10.2022 09:16:10"
                },
                {
                    "value": 20.0,
                    "time": "05.10.2022 09:16:10"
                },
                {
                    "value": 20.0,
                    "time": "05.10.2022 09:16:10"
                },
                {
                    "value": 20.0,
                    "time": "05.10.2022 09:16:10"
                },
                {
                    "value": 20.0,
                    "time": "05.10.2022 09:16:10"
                }
            ]
        },
        {
            "ID": 3,
            "server": 1,
            "manufacturer": "test_man",
            "highestTemp": 30.0,
            "maxTemp": 30.0,
            "currentTemp": 31.0,
            "averageTemp": 20.0,
            "lastTenTemps": [
                {
                    "value": 20.0,
                    "time": "05.10.2022 09:16:10"
                },
                {
                    "value": 20.0,
                    "time": "05.10.2022 09:16:10"
                },
                {
                    "value": 20.0,
                    "time": "05.10.2022 09:16:10"
                },
                {
                    "value": 20.0,
                    "time": "05.10.2022 09:16:10"
                },
                {
                    "value": 20.0,
                    "time": "05.10.2022 09:16:10"
                }
            ]
        } 
    ])

    return ( 
        <div className="home-display">
            {sensors.map( (sensor, i) =>  <Card key={i} sensorInfo={sensor} />)}
        </div>
     );
}
 
export default Index;