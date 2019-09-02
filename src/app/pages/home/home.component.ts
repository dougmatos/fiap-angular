import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loading = false;
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.verifyIsLogged();
  }

  verifyIsLogged() {
      this.userService.isLogged().subscribe(logado => {
        if (logado) { this.router.navigate(['/contacts']); }
      });
  }

  isInvalid(itemForm: string) {

    const item = this.loginForm.controls[itemForm];
    return !item.touched ? false : item.invalid;
  }

  async login() {

    this.loading = true;
    await this.userService.login(
      this.loginForm.get('email').value.toString(),
      this.loginForm.get('password').value.toString()
    ).then(x => this.loading = false);
  }
}
