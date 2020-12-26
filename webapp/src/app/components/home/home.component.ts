import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';
import { UserService } from 'src/app/services/user.service';
import { ValidationService } from 'src/app/services/validation.service';
import { Profile } from 'src/app/transaction/profile';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  profile: Profile = {} as Profile;
  message: string;
  validEmail: boolean = true;

  constructor(private service: UserService, private validation: ValidationService, private memory: SubjectService, private router: Router) { }

  ngOnInit(): void {
  }
  login() {
this.service.login(this.profile).subscribe(
  data=> {
    this.memory.setSession(data);
    this.router.navigate(['dashboard']);
  },
  error => this.message = error.message,
  () => this.reset()
  );
}

validateEmail() {
  this.validEmail = this.validation.validateEmail(this.profile.email);
}

reset() {
  this.profile = {} as Profile;
  this.message = "";
}
}
