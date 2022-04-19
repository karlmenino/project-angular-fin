import {Component, Input, OnInit} from '@angular/core';
import {Cars} from "../../../model/cars/cars";

@Component({
  selector: 'app-sous-list',
  templateUrl: './sous-list.component.html',
  styleUrls: ['./sous-list.component.css']
})
export class SousListComponent implements OnInit {
  @Input()
  cars!: Cars;

  constructor() { }

  ngOnInit(): void {
  }

}
