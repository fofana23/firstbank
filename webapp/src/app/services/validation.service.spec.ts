import { HttpClientModule } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "../app-routing.module";
import { SubjectService } from "./subject.service";
import { UserService } from "./user.service";
import { ValidationService } from "./validation.service"

describe('ValidationService', () => {
  let service: ValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
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
    });
    service = TestBed.inject(ValidationService);
  });

  it('should be created', () => {
    console.log("in test");
    expect(service).toBeTruthy();
  });
});
