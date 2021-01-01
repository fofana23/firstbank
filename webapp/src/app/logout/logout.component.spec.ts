import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HomeComponent } from '../home/home.component';
import { ProfileComponent } from '../profile/profile.component';
import { RegisterComponent } from '../register/register.component';
import { SubjectService } from '../services/subject.service';
import { UserService } from '../services/user.service';
import { ValidationService } from '../services/validation.service';

import { LogoutComponent } from './logout.component';

describe('LogoutComponent', () => {
  let component: LogoutComponent;
  let fixture: ComponentFixture<LogoutComponent>;

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
        UserService,
        ValidationService,
        SubjectService
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be 10', () => {
    let num = 10
    expect(num).toBe(10);
  });

  it('should logout', () => {
    component.logout();
    expect(component).toBeTruthy();
  });
});
