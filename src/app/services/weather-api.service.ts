import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  constructor(private http:HttpClient) {

   }
   users()
   {
     return this.http.get('http://www.weatherapi.com/docs/weather_conditions.json')
   }
}
