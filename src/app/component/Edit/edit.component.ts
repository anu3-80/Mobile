import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddService } from 'src/app/service/add.service';
import { EditService } from 'src/app/service/edit.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent {
  
  
  
  deviceNames: string[] = ['iPhone', 'Samsung Galaxy', 'OnePlus', 'Xiaomi', 'Nokia','Moto','Realme','Readme','Oppo','infinix','Vivo','IQ','Vivo V17','Vivo S1 Pro','Lava','Apple'];

  

  deviceId: number;
  device: any = {
    id: '',
    device_name: '',
    price: '',
    ram: '',
    storage: '',
    images: ''
  };
  constructor(private editService: EditService, private router: Router,private route:ActivatedRoute) { }


ngOnInit(): void {
  
  this.deviceId = +this.route.snapshot.paramMap.get('id');
  
  
  this.editService.getDeviceById(this.deviceId).subscribe((data) => {
    this.device = data;
  });
}

onSubmit(): void {
  
  this.editService.updateDevice(this.device).subscribe((response) => {

    this.router.navigate(['/view']);
  });
}
  }
  



