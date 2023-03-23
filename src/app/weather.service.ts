import { HttpClient, HttpParams } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { firstValueFrom, map, Observable, Subject } from "rxjs"
import { Weather } from "./models"

const APIKEY = ""
const WEATHERURL = "https://api.openweathermap.org/data/2.5/weather?"

@Injectable()
export class WeatherService {

    onWeather = new Subject<Weather[]>

    constructor(private http: HttpClient){}

    getWeatherByCity(city: string) {
        const params = new HttpParams()
            .set('q', city)
            .set('units', 'metric')
            .set('appid', APIKEY)

        return firstValueFrom(
            this.http.get<Weather[]>(WEATHERURL, { params })
        )
            .then((data: any) => data['weather'] as Weather[])
            .then(data => {
                this.onWeather.next(data)
                console.log(data)
                return data
            })
    }

}