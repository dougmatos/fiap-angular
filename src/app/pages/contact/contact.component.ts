import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

    contactForm = new FormGroup({
        cpf: new FormControl('', Validators.required),
        name: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),
        cep: new FormControl('', Validators.required),
        rua: new FormControl('rua', Validators.required),
        ruaNome: new FormControl('', Validators.required),
        numero: new FormControl('', Validators.required),
        complemento: new FormControl('')
    });

    public loading = false;
    public userId = '';
    public canExclude = false;

    public buttonName = 'Criar';
    public titleForm = 'Cadastrar novo';

    constructor(
        private contactService: ContactService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        this.userId = this.route.snapshot.paramMap.get('id');
        if (this.userId) {
            this.buttonName = 'Alterar';
            this.titleForm = 'Alterar cadastro';
            this.canExclude = true;
        }
        this.getUser(this.userId);
    }

    isInvalid(itemForm: string) {
        const item = this.contactForm.controls[itemForm];
        if (itemForm === 'cpf') { console.log(item); }
        return item.invalid && item.touched;
    }

    private getUser(id: string) {
        if (!id) { return; }
        this.loading = true;

        this.contactService.getbyId(id)
            .subscribe(data => {
                const dataRecived = data.payload.data();
                this.loading = false;

                Object.keys(dataRecived)
                    .forEach(item => this.contactForm.controls[item].setValue(dataRecived[item]));
            });
    }

    onSubmit() {
        this.loading = true;
        this.saveOrUpdate().then(() => this.goToList());
    }

    private saveOrUpdate(): Promise<any> {
        return (this.userId) ? this.contactService.update(this.userId, this.contactForm.value)
                : this.contactService.create(this.contactForm.value);
    }

    private goToList() {
        this.router.navigate(['/']);
    }
}
