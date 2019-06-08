import { Component } from '@angular/core';
import { UserService } from "../../services/user.service";
import { ActivatedRoute } from "@angular/router";


@Component({
    templateUrl: './user.page.html',
    styleUrls: ['./user.page.css']
})
export class UserPage {
    private loading: Boolean = false;
    private userId: string = "";
    private data: object = {};

    constructor(
        private userService: UserService,
        private route: ActivatedRoute
    ){ }

    ngOnInit(){
        this.userId = this.route.snapshot.paramMap.get('id');
        this.getUser(this.userId);
    }

    private getUser(id: string){
        if(id === null) return;

        this.userService.getbyId(id)
            .subscribe((data) => {
                this.data = data.payload.data();
                console.log(this.data);
            });
    }

    setValues(event){
        const { target } = event;
        this.data = {
            ...this.data, [target.name]: target.value
        };
        console.log(this.data);
    }

    createUser(){
        this.loading = true;
        this.userService.create({
            name: 'Douglas',
            email: 'dougmooca@gmai.com',
            age: 34
        }).then(() => this.loading = false);

    }
 }