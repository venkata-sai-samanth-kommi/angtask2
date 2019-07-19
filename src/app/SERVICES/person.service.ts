import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/internal/Subject';
@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }
  getPersonsJson() {
    return this.http.get('https://www.json-generator.com/api/json/get/bQhaGwJCZK?indent=2');
  }
  remove = new Subject<number>();
}
