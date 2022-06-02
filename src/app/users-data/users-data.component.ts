import { UsersDataService } from './../service/users-data.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users-data',
  templateUrl: './users-data.component.html',
  styleUrls: ['./users-data.component.css']
})
export class UsersDataComponent{
  users:any;
  constructor(private userData:UsersDataService) {
    this.userData.users().subscribe((data)=>{
      this.users=data;
    });
  }
  getUserFormData(data:any){
    console.log(data);
    this.userData.saveUser(data).subscribe((result)=>{
      console.log(result);
    })
  }

  

}
