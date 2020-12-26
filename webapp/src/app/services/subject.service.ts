import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { BehaviorSubject } from "rxjs";
import { AccountHolder } from "../transaction/account-holder";

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  blankHolder: AccountHolder = {} as AccountHolder
  public unsubscribe = new Subject();

  private behavior = new BehaviorSubject<AccountHolder>(this.blankHolder);
  public setSession(holder: AccountHolder){
    this.behavior.next(holder);
  }

  public session = this.behavior.asObservable();
}
