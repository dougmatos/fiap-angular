import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { User } from '../../models/User';

@Component({
    templateUrl: './contact-list.component.html',
    styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

    public users: User[] = [];
    public filter: string;
    public direction: string;

    constructor(private contactService: ContactService) { }

    setFilterBy(event: any) {
        this.filter = event.target.value;
    }

    setDirection(direction: string) {

        this.direction = direction;
    }

    ngOnInit() {
        this.contactService.getAll().subscribe(users => this.users = users);
    }
}
