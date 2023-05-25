import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  fechaActual: Date = new Date();
  anioActual = this.fechaActual.getFullYear().toString();
  customYearValues = [2020,2021,2022,2023,2024];

  customPicker = {
    buttons: [
      {
        text: "Detail",
        handler: (evt) => {
          console.log(evt);
        }
      },
      {
        text: "Log",
        handler: () => {
          console.log('log!');
        }
      },
    ]
  }

  constructor() { }

  ngOnInit() {
  }

  verificaFecha( event ) {
    //console.log(event);
    console.log(new Date(event.detail.value));
    console.log("Año actual: " + this.anioActual);
  }

}
