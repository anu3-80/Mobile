import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddService {
  url='http://localhost:8080/mobile';
  constructor(public link:HttpClient) { }
  mobile(FormData):Observable<any>
  {
    return this.link.post(this.url+'/store',FormData);
  }
}
