import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private http:HttpClient) { }

  getEkszerek(){
    return this.http.get("https://webshop-9badc-default-rtdb.europe-west1.firebasedatabase.app/jewelry.json")
  }
}
