import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WeatherService } from 'src/app/weather.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  form!: FormGroup

  constructor(private fb: FormBuilder, private weatherSvc: WeatherService) {}

  ngOnInit(): void {
    this.createForm()
  }

  createForm(){
    this.form = this.fb.group({
      city: this.fb.control('', [Validators.required])
    })
  }

  getWeather() {
    const city = this.form.value.city
    this.weatherSvc.getWeatherByCity(city)
  }

}
