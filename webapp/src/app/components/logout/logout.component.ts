import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from 'src/app/transaction/profile';
import { runInThisContext } from 'vm';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  profile: Profile = {} as Profile;

  constructor(private service: UserService, private memory: SubjectService, private router: Router) { }

  ngOnInit(): void {
    runInThisContext.memory.session.subscribe(
      data => {
        this.profile.firstname = data.firstname;
        this.profile.email = data.email;
        this.profile.password = data.password:

      }
    );
  }
logout(){
  this.service.logout(this.profile).subscribe(data => {
    this.memory.setSession(data);
    this.router.navigate(['home']);
  });
}

}
