import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Weather } from 'src/app/models';
import { WeatherService } from 'src/app/weather.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit, OnDestroy {

  constructor(private weatherSvc: WeatherService){}

  weather!: Weather[]
  weatherSub!: Subscription

  ngOnInit(): void {
      this.weatherSub = this.weatherSvc.onWeather.subscribe(
        data => this.weather = data
      )
  }

  ngOnDestroy(): void {
    this.weatherSub.unsubscribe()
  }

}
