import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../models/User';

@Component({
    templateUrl: './userList.page.html',
    styleUrls: ['./userList.page.css']
})
export class UserListPage{ 

    public users: User[] = [];
    public filter: string;
    public direction: String;
    
    constructor(private userService: UserService){ }

    setFilterBy(event: any){
        this.filter = event.target.value;
    }

    setDirection(direction: String) {

        this.direction = direction;
    }

    ngOnInit(){
        this.userService.getAll().subscribe(users => this.users = users);
    }
}