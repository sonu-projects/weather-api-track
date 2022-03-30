import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from '../services/weather-api.service';
@Component({
  selector: 'app-weatherapi',
  templateUrl: './weatherapi.component.html',
  styleUrls: ['./weatherapi.component.css']
})
export class WeatherapiComponent implements OnInit {
  users:any;

  constructor(private Service : WeatherApiService) { }

  ngOnInit(): void 
  {
    let response = this.Service.users();
    response.subscribe((data) => this.users = data);
  }

}
