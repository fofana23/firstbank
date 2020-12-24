import { Component, OnInit } from '@angular/core';
import { Profiler } from 'inspector';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  holder: AccountHolder = {} as AccountHolder;
  profile: Profile = {} as Profiler;
  transaction: Transaction = {} as Transaction
  creditAccounts: Accounts: Account[] = []
  bankingAccounts: Account[] = [];
  deposit: boolean;
  withdraw: boolean;
  transfer:boolean;
  apply: boolean;
  message: string;

  constructor(private service: UserService, private validation: ValidationService, private memory: SubjectService, private router: Router) { }

  ngOnInit(): void {
    this.toggle('deposit');
    this.memory.session.subscribe(
      data=> {
        this.holder = data
        if (data.accounts)
          data.accounts.forEach(account => {
          if (account.credit)
            this.creditAccounts.push(account)
          else
            this.bankingAccounts.push(account);
        });
      },
      error => this.message = error.error.message
    );
  }
getInfo() {
  this.profile.email = this.holder.email;
  this.profile.password = this.holder.password;
  this.service.login(this.profile).subscribe(
    data => {
      this.holder= data;
      this.memory.setSession(data);
    };
    error => this.message = error.message,
    () => this.reset()
  );
}

toggle(tab: string) {
  console.log(tab)
  switch(tab) {
    case "deposit":
      this.deposit= true;
      this.withdraw= false;
      this.transfer = false;
      this.apply = false;
      break;
    case "withdraw":
      this.deposit= false;
      this.withdraw= true;
      this.transfer = false;
      this.apply = false;
      break;
    case "transfer":
      this.deposit= false;
      this.withdraw= false;
      this.transfer = true;
      this.apply = false;
      break;
    case "apply":
      this.deposit= false;
      this.withdraw= false;
      this.transfer = false;
      this.apply = true;
      break;
  }
}
selectTansaction(name: string) {
  this.transaction.holderId = this.holder.id;
  this.transaction.accountName = name;
}

selectTransfer(transferName: string, receiveEmail: string) {
  this.transaction.transferAccount = transferName;
  this.transaction.receiveEmail = receiverEmail;
}

depositMoney() {
  this.service.deposit(this.transaction).subscribe(
    data => this.memory.setSession(data)
  )
  this.reset();
}

withdrawMoney() {
  this.service.withdraw(this.transaction).subscribe(
    data => this.memory.setSession(data)
  )
  this.reset();
}
transferMoney() {
  this.service.transfer(this.transaction).subscribe(
    data => this.memory.setSession(data)
  )
}
applyForAccount() {
 this.transaction.holderId = this.holder.id;
 this.service.applyForAccount(this.transaction).subscribe(
  data => this.memory.setSession(data)
 )
 this.reset();
}

reset() {
  this.profile = {} as Profile;
  this.bankingAccounts = [];
  this.creditAccounts = [];
  this.transaction = {} as Transaction;
  this.message = "";
}
}
