import { Component, OnInit } from '@angular/core';

import { UsersDataService } from '../service/users-data.service';
import { FormGroup,FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  updateUser = new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    phoneno:new FormControl('')

  })
  usersData: any=[];
  route: any;
  

  

  constructor(private service:UsersDataService,route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    //console.warn(this.router.snapshot.params['id']);
  /* this.usersData.getCurrentUser(this.router.snapshot.params['id']).
   subscribe((result: any)=>{
     this.updateUser = new FormGroup({
      name:new FormControl(result['name']),
      email:new FormControl(result['email']),
      phoneno:new FormControl(result['phoneno'])
     })
        });*/
        this.route.params.subscribe((params:any) => {
          console.log(params['id']);
       });
  }
  collection(){
    console.log('result');
  }

}
