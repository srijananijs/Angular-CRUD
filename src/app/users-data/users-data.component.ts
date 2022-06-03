import { UsersDataService } from './../service/users-data.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users-data',
  templateUrl: './users-data.component.html',
  styleUrls: ['./users-data.component.css']
})
export class UsersDataComponent {
  users: any = [];
  constructor(private userData: UsersDataService) {
    this.userData.users().subscribe((data) => {
      this.users = data;
    });
  }
  getUserFormData(data: any) {
    console.log(data);
    //this.users.push(data + 1, 1)
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
