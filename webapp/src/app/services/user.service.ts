import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { environment } from "src/environments/environment";
import { AccountHolder } from "../transaction/account-holder";
import { Profile } from "../transaction/profile";
import { Transaction } from "../transaction/transaction";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

public register(holder: AccountHolder): Observable<AccountHolder> {
  return this.http.post<AccountHolder>(`${environment.baseUrl}/${environment.registerUrl}`, holder);
}

public login(profile: Profile): Observable<AccountHolder> {
  return this.http.post<AccountHolder>(`${environment.baseUrl}/${environment.loginUrl}`, profile);
}

public logout(profile: Profile): Observable<AccountHolder> {
  return this.http.post<AccountHolder>(`${environment.baseUrl}/${environment.logoutUrl}`, profile);
}
public applyForAccount(transaction: Transaction): Observable<AccountHolder> {
  return this.http.post<AccountHolder>(`${environment.baseUrl}/${environment.applyUrl}`, transaction);
}
public editProfile(profile: Profile): Observable<AccountHolder> {
  return this.http.put<AccountHolder>(`${environment.baseUrl}/${environment.editUrl}`, profile);
}
public deposit(transaction: Transaction): Observable<AccountHolder> {
  return this.http.put<AccountHolder>(`${environment.baseUrl}/${environment.depositUrl}`, transaction);
}
public withdraw(transaction: Transaction): Observable<AccountHolder> {
  return this.http.put<AccountHolder>(`${environment.baseUrl}/${environment.withdrawUrl}`, transaction);
}
public transfer(transaction: Transaction): Observable<AccountHolder> {
  return this.http.put<AccountHolder>(`${environment.baseUrl}/${environment.transferUrl}`, transaction);
}
}
