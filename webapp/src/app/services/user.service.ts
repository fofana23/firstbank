import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { environment } from "src/environments/environment";
import { AccountHolder } from "../models/account-holder";
import { Profile } from "../models/profile";
import { Transaction } from "../models/transaction";
import { HttpClient } from '@angular/common/http';
import { Logger } from "../utils/logger";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

public register(holder: AccountHolder): Observable<AccountHolder> {
  Logger.info('http post request: ${environment.baseUrl}/${environment.registerUrl}');
  return this.http.post<AccountHolder>(`${environment.baseUrl}/${environment.registerUrl}`, holder);
}

public login(profile: Profile): Observable<AccountHolder> {
  Logger.info('http post request: ${environment.baseUrl}/${environment.loginUrl}');
  return this.http.post<AccountHolder>(`${environment.baseUrl}/${environment.loginUrl}`, profile);
}

public logout(profile: Profile): Observable<AccountHolder> {
  Logger.info('http post request: ${environment.baseUrl}/${environment.logoutUrl}');
  return this.http.post<AccountHolder>(`${environment.baseUrl}/${environment.logoutUrl}`, profile);
}
public applyForAccount(transaction: Transaction): Observable<AccountHolder> {
  Logger.info('http post request: ${environment.baseUrl}/${environment.applyUrl}');
  return this.http.post<AccountHolder>(`${environment.baseUrl}/${environment.applyUrl}`, transaction);
}
public editProfile(profile: Profile): Observable<AccountHolder> {
  Logger.info('http post request: ${environment.baseUrl}/${environment.editUrl}');
  return this.http.put<AccountHolder>(`${environment.baseUrl}/${environment.editUrl}`, profile);
}
public deposit(transaction: Transaction): Observable<AccountHolder> {
  Logger.info('http post request: ${environment.baseUrl}/${environment.depositUrl}');
  return this.http.put<AccountHolder>(`${environment.baseUrl}/${environment.depositUrl}`, transaction);
}
public withdraw(transaction: Transaction): Observable<AccountHolder> {
  Logger.info('http post request: ${environment.baseUrl}/${environment.withdrawUrl}');
  return this.http.put<AccountHolder>(`${environment.baseUrl}/${environment.withdrawUrl}`, transaction);
}
public transfer(transaction: Transaction): Observable<AccountHolder> {
  Logger.info('http post request: ${environment.baseUrl}/${environment.transferUrl}');
  return this.http.put<AccountHolder>(`${environment.baseUrl}/${environment.transferUrl}`, transaction);
}
}
