import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HomeComponent } from '../home/home.component';
import { LogoutComponent } from '../logout/logout.component';
import { ProfileComponent } from '../profile/profile.component';
import { SubjectService } from '../services/subject.service';
import { UserService } from '../services/user.service';
import { ValidationService } from '../services/validation.service';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

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
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should register', () => {
    component.register();
    expect(component).toBeTruthy();
  });

  it('should reset', () => {
    component.reset();
    expect(component).toBeTruthy();
  });
});
