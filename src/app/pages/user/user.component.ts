import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

    userForm = new FormGroup({
        name: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        age: new FormControl('', [Validators.required]),
        phone: new FormControl('', [Validators.required])
    });

    public loading = false;
    private userId = '';

    public buttonName = 'Criar';
    public titleForm = 'Cadastrar novo';

    constructor(
        private userService: UserService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        this.userId = this.route.snapshot.paramMap.get('id');
        if (this.userId) {
            this.buttonName = 'Alterar';
            this.titleForm = 'Alterar cadastro';
        }
        this.getUser(this.userId);
    }

    isInvalid(itemForm: string) {
        const item = this.userForm.controls[itemForm];
        return item.invalid && item.touched;
    }

    private getUser(id: string) {
        if (!id) { return; }
        this.loading = true;

        this.userService.getbyId(id)
            .subscribe((data) => {
                const dataRecived = data.payload.data();
                Object.keys(dataRecived).forEach(item =>
                    this.userForm.controls[item].setValue(dataRecived[item]));
                this.loading = false;
            });
    }

    onSubmit() {
        this.loading = true;
        this.saveOrUpdate().then(() => this.goToList());
    }

    private saveOrUpdate(): Promise<any> {
        return (this.userId) ? this.userService.update(this.userId, this.userForm.value)
                : this.userService.create(this.userForm.value);
    }

    private goToList() {
        this.router.navigate(['/']);
    }
 }