import { Component } from '@angular/core';
import { ViewService } from 'src/app/service/view.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  devices: any[] = [];
  cart: any[]=[];

  constructor(private test: ViewService) {}

  ngOnInit(){
    this.test.getMobile().subscribe((data) => {
      this.devices = data;
    });
  }
  select(device: any){
     console.log("Added to Cart:  You selected the device--->", device);
    if (!this.cart.some(item => item.id === device.id)) {
      this.cart.push(device);
    }
  }
  }
