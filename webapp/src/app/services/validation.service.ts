import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  public validationEmail(email: string): boolean {
    var pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
  }
}
