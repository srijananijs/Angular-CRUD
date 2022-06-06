import { UsersDataService } from './../service/users-data.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-users-data',
  templateUrl: './users-data.component.html',
  styleUrls: ['./users-data.component.css']
})
export class UsersDataComponent {
  users: any = [];
  /*userForm = new FormGroup({
    name: new FormControl('sri'),
    email: new FormControl('sri@gmail.com'),
    phoneno: new FormControl('8975664903')

  })*/
  constructor(private userData: UsersDataService) {
    this.userData.users().subscribe((data) => {
      this.users = data;
    });
  }
  getUserFormData(data: any) {
    console.log(data);
    this.userData.saveUser(data).subscribe((result) => {
      console.log(result);
    })
  }
  deleteUser(item: any) {
    this.users.splice(item - 1, 1)
    this.userData.deleteUser(item).subscribe((result) => {
      console.log("result", result);
    });

  }
}
