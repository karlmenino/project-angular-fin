import { Component, OnInit } from '@angular/core';
import {Cars} from "../../model/cars/cars";
import {CarsService} from "../../service/cars.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  carsList: Cars[] = [];
  constructor(private carService : CarsService) { }

  ngOnInit(): void {
    this.updateList();

  }

  updateList(){
    this.carService.listCars()
      .subscribe({
        next: carsList => {this.carsList=carsList},
        error: err => {console.error(err);},
        complete:() => {console.log('completed')}
      })

  }

}
