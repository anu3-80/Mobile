import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewService } from 'src/app/service/view.service';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  store: any[]=[];
  mobileObj: any
  constructor(public test:ViewService,public route:Router,public router:ActivatedRoute){}
  ngOnInit(){
    this.test.getMobile().subscribe(
      (res)=>{
          console.log(res);
          this.store=res;
      }
    )
  }
  deleteItem(id)
  {
      this.test.deleteMobile(id).subscribe(
        (res)=>{
             console.log(res);
        }
      )
  }


}
  

  

