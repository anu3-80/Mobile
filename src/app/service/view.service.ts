import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewService {

  url='http://localhost:8080/mobile';
  constructor(public link:HttpClient) { }
  getMobile():Observable<any>
  {
    return this.link.get(this.url+'/get');
  }
  deleteMobile(id):Observable<any>
  {
    return this.link.delete(this.url+'/delete'+'/'+id,{responseType:'text'})
  }
}

