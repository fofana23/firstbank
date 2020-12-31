import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { Profile } from "../models/profile";
import { SubjectService } from "./subject.service";
import { UserService } from "./user.service";
import { ValidationService } from "./validation.service";

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        UserService,
        ValidationService,
        SubjectService
      ],
    });

    service= TestBed.inject(UserService);
  });

  it('should be created', () => {
    let profile = {
      firstname: "string",
      lastname: "string",
      dob: "string",
      address: "string",
      loggedin: true,
      creditScore: 121455,
      email: "string",
      password: "string",
    } as Profile;
      service.login(profile);
    expect(service).toBeTruthy();
  });
});
