import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Cars} from "../model/cars/cars";

const  BASE_URL = "http://localhost:3000/cars"

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    })
  };
  constructor(private http: HttpClient) { }
  listCars(): Observable<Cars[]> {
    return this.http.get<Cars[]>(BASE_URL);
  }

  create(data: Cars): Observable<any> {
    return this.http.post(BASE_URL, data, this.httpOptions);
  }
  update(data: Cars): Observable<any> {
    return this.http.put(BASE_URL+"/"+data.id, data, this.httpOptions);
  }
  delete(id: number){
    return this.http.delete(BASE_URL+"/"+id)
  }
}
