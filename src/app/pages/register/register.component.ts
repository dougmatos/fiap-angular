import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  loading = false;
  registerForm = new FormGroup({
    email: new FormControl('', Validators.email),
    name: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  private getForm(item: string): string {
    return this.registerForm.get(item).value as string;
  }

  async  register() {

    try {
      this.loading = true;
      await this.userService.register(
        this.getForm('email'),
        this.getForm('name'),
        this.getForm('password')
      );
      alert('usuário registrado com sucesso!');
      this.router.navigate(['/']);
    } catch (error) {
      alert(error.message);
    }
    this.loading = false;
  }

  isInvalid(itemForm: string) {

    const item = this.registerForm.controls[itemForm];
    return !item.touched ? false : item.invalid;
  }
}
