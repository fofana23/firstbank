import { TestBed } from "@angular/core/testing";
import { exception } from "console";
import { SubjectService } from "./subject.service";

describe('SubjectService', () => {
  let service: SubjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubjectService);
  });

  it('should be created', () => {
    exception(service).toBeTruthy();
  });
});
