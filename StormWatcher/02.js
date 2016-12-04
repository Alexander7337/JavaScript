class WeatherReport{
    constructor(temperature, humidity, pressure, windSpeed){
        this._id = WeatherReport.getId();
        this._temperature = temperature;
        this._humidity = humidity;
        this._pressure = pressure;
        this._windSpeed = windSpeed;
    }

    toString(){
        let condition = "Not stormy";
        if (this._temperature < 20 &&
            (this._pressure < 700 || this._pressure > 900) &&
                this._windSpeed > 25){
            condition = "Stormy"
        }

        let result = `Reading ID: ${this._id}
        Temperature: ${this._temperature}*C
        Relative Humidity: ${this._humidity}%
        Pressure: ${this._pressure}hpa
        Wind Speed: ${this._windSpeed}m/s
        Weather: ${condition}`

        return result;
    }

    static getId(){
        if (!WeatherReport.id){
            WeatherReport.id = 0;
        }
        return WeatherReport.id++;
    }
}

let report1 = new WeatherReport(32, 66, 760, 12);
console.log(report1.toString());

let report2 = new WeatherReport(10, 40, 680, 30);
console.log(report2.toString());
