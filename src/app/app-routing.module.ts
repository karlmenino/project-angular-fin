import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from "./components/list/list.component";
import {CarsFormulaireComponent} from "./components/cars-formulaire/cars-formulaire.component";

const routes: Routes = [{
  path: '',
  component: ListComponent
}, {
  path: 'create',
  component: CarsFormulaireComponent
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
