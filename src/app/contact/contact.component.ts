import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

    form: FormGroup;
    submitted = false;

  constructor() { }

  ngOnInit() {

      this.form = new FormGroup({
          email: new FormControl(null, [
              Validators.required,
              Validators.email
          ]),
          name: new FormControl(null, [
              Validators.required
          ]),
          message: new FormControl(null, [
              Validators.required
          ])
      });
  }

    submit() {
        if (this.form.invalid) {
            return;
        }
    }
}

