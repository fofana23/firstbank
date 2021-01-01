import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { LogoutComponent } from '../logout/logout.component';
import { AccountHolder } from '../models/account-holder';
import { Profile } from '../models/profile';
import { Transaction } from '../models/transaction';
import { ProfileComponent } from '../profile/profile.component';
import { RegisterComponent } from '../register/register.component';
import { SubjectService } from '../services/subject.service';
import { UserService } from '../services/user.service';
import { ValidationService } from '../services/validation.service';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HomeComponent,
        ProfileComponent,
        DashboardComponent,
        RegisterComponent,
        LogoutComponent
      ],
      imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
      ],
      providers: [
       { provide: UserService, useClass: UserServiceStub },
        ValidationService,
        SubjectService
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.login();
    expect(component).toBeTruthy();
  });

  it('should validate email', () => {
    component.validateEmail();
    expect(component).toBeTruthy();
  });

  it('should reset', () => {
    component.reset();
    expect(component).toBeTruthy();
  });
});

class UserServiceStub{
  mockHolder: AccountHolder = {
    id: 1,
    firstname: "string",
    lastname: "string",
    dob: "string",
    ssn: 1000000000,
    loggedin: true,
    activeDate: "integer",
    creditScore: 654,
    email: "string",
    password: "string",
   accounts: []
  } as AccountHolder;

  public register(holder: AccountHolder): Observable<AccountHolder> {
    return of(this.mockHolder);
  }

  public login(profile: Profile): Observable<AccountHolder> {
    return of(this.mockHolder);
  }

  public logout(profile: Profile): Observable<AccountHolder> {
    return of(this.mockHolder);
  }

  public applyForAccount(transaction: Transaction): Observable<AccountHolder> {
    return of(this.mockHolder);
  }

  public editProfile(profile: Profile): Observable<AccountHolder> {
    return of(this.mockHolder);
  }

  public deposit(transaction: Transaction): Observable<AccountHolder> {
    return of(this.mockHolder);
  }

  public withdraw(transaction: Transaction): Observable<AccountHolder> {
    return of(this.mockHolder);
  }

  public transfer(transaction: Transaction): Observable<AccountHolder> {
    return of(this.mockHolder);
  }
}
