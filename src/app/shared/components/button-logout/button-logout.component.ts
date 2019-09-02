import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-button-logout',
  templateUrl: './button-logout.component.html',
  styleUrls: ['./button-logout.component.css']
})
export class ButtonLogoutComponent implements OnInit {

  isLogged = false;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.isLogged().subscribe(x => this.isLogged = x);
  }

}
