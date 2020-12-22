import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CommonService } from '../common.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-restaurant',
  templateUrl: './update-restaurant.component.html',
  styleUrls: ['./update-restaurant.component.css']
})

export class UpdateRestaurantComponent implements OnInit {
  alert:boolean=false;

  editRestaurant = new FormGroup({
    name: new FormControl(''),
    location: new FormControl(''),
    mobile: new FormControl(''),
    email: new FormControl('')
  });
  
  constructor(private resto:CommonService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params.id)
    this.resto.getCurrentData(this.router.snapshot.params.id).subscribe((result:any)=>{
      this.editRestaurant= new FormGroup({
        name: new FormControl(result['name']),
        location: new FormControl(result['location']),
        mobile: new FormControl(result['mobile']),
        email: new FormControl(result['email'])
      })
    })
  }

  updateResto(){
    this.resto.updateRestoData(this.router.snapshot.params.id,this.editRestaurant.value).subscribe((result)=>{
      this.alert=true;
      console.log(result,"data updated successfully");
    })
  }

  closeAlert(){
    this.alert = false;
  }

}
