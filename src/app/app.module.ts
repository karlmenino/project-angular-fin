import { NgModule,LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {ListComponent} from "./components/list/list.component";
import {SousListComponent} from "./components/list/sous-list/sous-list.component";
import {HttpClientModule} from "@angular/common/http";
import { CarsFormulaireComponent } from './components/cars-formulaire/cars-formulaire.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {MatChipsModule} from "@angular/material/chips";
import {MatSliderModule} from "@angular/material/slider";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatRadioModule} from "@angular/material/radio";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatSelectModule} from "@angular/material/select";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatInputModule} from "@angular/material/input";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {registerLocaleData} from "@angular/common";
import localeFR from '@angular/common/locales/fr';
registerLocaleData(localeFR);
@NgModule({
    declarations: [
        AppComponent,
        ListComponent,
        SousListComponent,
        ListComponent,
        CarsFormulaireComponent,
        NavBarComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatSliderModule,
    MatChipsModule,
    MatListModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatRadioModule,
    MatDatepickerModule,
    MatSelectModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCheckboxModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'fr'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
