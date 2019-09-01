import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../models/User';

@Component({
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

    public users: User[] = [];
    public filter: string;
    public direction: string;

    constructor(private userService: UserService) { }

    setFilterBy(event: any) {
        this.filter = event.target.value;
    }

    setDirection(direction: string) {

        this.direction = direction;
    }

    ngOnInit() {
        this.userService.getAll().subscribe(users => this.users = users);
    }
}