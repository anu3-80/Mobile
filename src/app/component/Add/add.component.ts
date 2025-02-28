import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AddService } from 'src/app/service/add.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  deviceNames: string[] = ['iPhone', 'Samsung Galaxy', 'OnePlus', 'Xiaomi', 'Nokia','Moto','Realme','Readme','Oppo','infinix','Vivo','IQ','Vivo V17','Vivo S1 Pro','Lava','Apple'];
  id: number;
  device_name: string = '';
  price: number;
  ram: string='';
  storage:string='';
  images:string=''
  
  successMessage: string = '';
  errorMessage: string = '';

  constructor(public test: AddService, public router: Router) {}

  mobile(userForm): void {
   // console.log(userForm.value)
    this.test.mobile(userForm.value).subscribe({
      next: () => {
        this.successMessage = 'successfully stored your details';
        this.router.navigate(['/view']);
      },
      error: () => {
        this.errorMessage = 'Details failed!';
      }
    });
  }
}

