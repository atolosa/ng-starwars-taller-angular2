import {Component, OnInit} from '@angular/core';
import {Http, Response} from "@angular/http";
import "rxjs";
import {SwapiService} from "./core/swapi.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'app works!';
  people = [];

  constructor(private swapiService:SwapiService){ //en el constructor lo usamos para inyección de dependencias

  }

  ngOnInit(){
    // debugger; // por si queremos poner puntos de ruptura, se pone debugger
    this.swapiService
      .getPeopleList()
      .subscribe((people) => this.people = people);

  }

}
