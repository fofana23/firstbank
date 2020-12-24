import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private service: UserService, private validation: ValidationService) { }

  ngOnInit(): void {
  }
getInfo
  this.profile.email = "master@gmail.com";
  this.profile.password = "demo";
  this.service.login(this.profile).subscribe
}
