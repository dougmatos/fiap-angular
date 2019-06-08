import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { UrlSerializer } from '@angular/router';
import { User } from '../../models/User';

@Component({
    templateUrl: './userList.page.html',
    styleUrls: ['./userList.page.css']
})
export class UserListPage{ 

    public users: User[] = [];
    
    constructor(private userService: UserService){ }

    ngOnInit(){
        this.userService.getAll().subscribe(users => this.users = users);
    }
}