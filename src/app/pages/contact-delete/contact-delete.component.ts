import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-delete',
  templateUrl: './contact-delete.component.html',
  styleUrls: ['./contact-delete.component.css']
})
export class ContactDeleteComponent implements OnInit {

  constructor(private contactService: ContactService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const idContact = this.route.snapshot.paramMap.get('id');
    this.contactService.delete(idContact).then(x => this.router.navigate(['/contacts']));
  }
}
