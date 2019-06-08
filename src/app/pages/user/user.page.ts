import { Component } from '@angular/core';
import { UserService } from "../../services/user.service";
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Observable } from 'rxjs';


@Component({
    templateUrl: './user.page.html',
    styleUrls: ['./user.page.css']
})
export class UserPage {

    userForm = new FormGroup({
        name: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        age: new FormControl('', [Validators.required]),
        phone: new FormControl('', [Validators.required])
    });

    private loading: Boolean = false;
    private userId: string = "";

    public buttonName: string = "Criar";
    public titleForm: string = "Cadastrar novo";

    constructor(
        private userService: UserService,
        private route: ActivatedRoute,
        private router: Router
    ){ }

    ngOnInit(){
        this.userId = this.route.snapshot.paramMap.get('id');
        if(this.userId) {
            this.buttonName = "Alterar";
            this.titleForm = "Alterar cadastro";
        }
        this.getUser(this.userId);
    }

    isInvalid(itemForm: string){
        let item = this.userForm.controls[itemForm];
        return item.invalid && item.touched;
    }

    private getUser(id: string){
        if(!id) return;
        this.loading = true;

        
        this.userService.getbyId(id)
            .subscribe((data) => {
                let _data = data.payload.data();
                Object.keys(_data).forEach(item => this.userForm.controls[item].setValue(_data[item]));
                this.loading = false;
            });
    }

    onSubmit(){
        this.loading = true;
        this.saveOrUpdate().then(() => this.goToList());
    }

    private saveOrUpdate() : Promise<any>{
        return (this.userId) ? this.userService.update(this.userId, this.userForm.value) 
                : this.userService.create(this.userForm.value);
    }

    private goToList(){
        this.router.navigate(['/']);
    }
 }