import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditService {
   url='http://localhost:8080/mobile';

  constructor(public http: HttpClient) {}

  getDevices(): Observable<any[]> {
    return this.http.get<any[]>(this.url+'/get');
  }
  getDeviceById(id: number): Observable<any> {
    return this.http.get<any>(this.url+'/get'+'/'+id);
  }
  updateDevice(device: any): Observable<any> {
    return this.http.put<any>(this.url+'/update'+'/'+device.id, device);
  }
}


