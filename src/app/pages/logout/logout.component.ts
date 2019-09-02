import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  templateUrl: './logout.component.html'
})
export class LogoutComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.logout();
  }
}
