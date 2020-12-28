import { Component } from '@angular/core';
import { SubjectService } from './services/subject.service';
import { AccountHolder } from './transaction/account-holder';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInIt {

    holder: AccountHolder= {} as AccountHolder;

    constructor(private memory: SubjectService) { }

    ngOnInIt(): void {
      this.memory.session.subscribe(data => this.holder = data):
    }
}
