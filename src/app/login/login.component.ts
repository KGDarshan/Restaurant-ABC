import { CommonService } from './../common.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    alert:boolean = false;
    email:any;
    password:any;
  constructor(private resto:CommonService, private router: Router) { }

  ngOnInit(): void {
  }

  logIn(){
    if(this.email == "kdarshang@gmail.com" && this.password == "kdarshang"){
      this.router.navigate(["../list"]);
    }
    else{
      alert("Please enter valid credential");
    }
  }
}
