import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, FormControlName } from "@angular/forms";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup
  constructor() {}

  ngOnInit() {
    this.signupForm = new FormGroup({
      
    })
  }
}
