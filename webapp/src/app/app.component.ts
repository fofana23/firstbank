import { Component, OnInit } from '@angular/core';
import { SubjectService } from './services/subject.service';
import { AccountHolder } from './models/account-holder';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    holder: AccountHolder= {} as AccountHolder;
  title: any;

    constructor(private memory: SubjectService) { }

    ngOnInit(): void {
      this.memory.session.subscribe(data => this.holder = data);
    }
}
