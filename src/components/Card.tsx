import { FunctionComponent, useState } from "react";
import { Sensor, Temperature } from "../interfaces/interfaces";
import "../styles/Card.css"

interface CardProps {
    sensorInfo: Sensor 
}
 
const Card: FunctionComponent<CardProps> = ({sensorInfo}) => {
    const [sensors, setSensors] = useState<Sensor[]>([]);

    return (  
        <div className="card">
            <div className="card-header">
                <div id="sensor"><p>Nr:{sensorInfo.ID}</p></div>
                <div id="max"><p>Max:{sensorInfo.ID}</p></div>
                <div id="current"><p>Aktuell:{sensorInfo.ID}</p></div>
                <div id="avg"><p>⌀:{sensorInfo.ID}</p></div>
                <div id="highest"><p>Höchste:{sensorInfo.ID}</p></div>
            </div>
            {sensorInfo.lastTenTemps.map( (temp: Temperature) => <p>{temp.time} {temp.value}</p>)}
        </div>
    );
}
 
export default Card;