import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CarsService} from "../../service/cars.service";
import {Cars} from "../../model/cars/cars";

@Component({
  selector: 'app-cars-formulaire',
  templateUrl: './cars-formulaire.component.html',
  styleUrls: ['./cars-formulaire.component.css']
})
export class CarsFormulaireComponent implements OnInit {

  submitted: boolean = false;

  titre : string="ajout";
  // @Input()
  cars?: Cars;

  carsFormulaire: FormGroup=this.Init();


  constructor(private carService: CarsService , private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.Init();

  }
  Init(){
    return this.carsFormulaire= this.fb.group({
      id: [this.cars?.id],
      title: [this.cars?.title, [Validators.required]],
      adress: [this.cars?.adress],
      brand: [this.cars?.brand,],
      model: [this.cars?.model, [Validators.required]],
      model_year: [this.cars?.model_year, [Validators.required]],
      issuance: [this.cars?.issuance],
      mileage: [this.cars?.mileage],
      fuel: [this.cars?.fuel],
      color: [this.cars?.color, [Validators.required]],
      numbers_doors: [this.cars?.numbers_doors],
      horse_power: [this.cars?.horse_power],
      price: [this.cars?.price, [Validators.required]],
      pictures: [this.cars?.pictures,[Validators.required]],
      solde: [this.cars?.solde],
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.carsFormulaire.invalid) {
      return;
    }
    let formValue = this.carsFormulaire.value;
    console.log(formValue);
    this.cars = {
      id: formValue['id'],
      title: formValue['title'],
      adress: formValue['adress'],
      brand: formValue['brand'],
      model: formValue['model'],
      model_year: formValue['model_year'],
      issuance: formValue['issuance'],
      mileage: formValue['mileage'],
      fuel: formValue['fuel'],
      color: formValue['color'],
      numbers_doors: formValue['numbers_doors'],
      horse_power: formValue['horse_power'],
      price: formValue['price'],
      pictures:formValue['pictures'],
      solde: formValue['solde']
    }
    console.log(this.cars)
    this.carService.create(this.cars)
      .subscribe();
  }

  get f() {
    return this.carsFormulaire.controls;
  }


}
