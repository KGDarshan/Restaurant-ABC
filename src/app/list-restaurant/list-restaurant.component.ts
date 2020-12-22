import { CommonService } from './../common.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-list-restaurant',
  templateUrl: './list-restaurant.component.html',
  styleUrls: ['./list-restaurant.component.css']
})
export class ListRestaurantComponent implements OnInit {
  alert:boolean = false;
  public collection:any = [];
  constructor(private commonService:CommonService) { }

  ngOnInit(): void {
   this.commonService.getRestoList().subscribe((result)=>{
     this.collection=result;
     console.log(this.collection);
   }); 
  }

  deleteResto(resto:any){
    this.collection.splice(resto.id,-1)
    this.commonService.deleteRestoData(resto).subscribe((result: any)=>{
      console.log("Data is Deleted Successfull !", result)
      this.alert= true;
    })
  }

  closeAlert(){
    this.alert = false;
  }
  
}