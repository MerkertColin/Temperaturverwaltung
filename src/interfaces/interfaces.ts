export interface Sensor {
    ID: number,
    server: number
    manufacturer: string,
    highestTemp: number,
    maxTemp: number,
    currentTemp: number,
    lastTenTemps: Temperature[]
}

export interface Temperature {
    value: number,
    time: string
}