import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ValidationService } from 'src/app/services/validation.service';
import { AccountHolder } from 'src/app/transaction/account-holder';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  holder: AccountHolder = {} as AccountHolder
  message: string;

  constructor(private service: UserService, private validation: ValidationService) { }

  ngOnInit(): void {
  }

  register() {
    this.service.register(this.holder).subscribe(
      data => console.log(data),
      error => this.message = error.message,
      () => this.register()
    );
  }
reset() {
  this.holder = {} as AccountHolder;
  this.message = "";
}

}
