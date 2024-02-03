import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LeadServicesService } from './lead-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _service: LeadServicesService
  ) {}
  ngOnInit(): void {
    this.form = this._formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      telefone: [''],
      estado: [''],
      cidade: [''],
      mensagem: [''],
    });
  }

  save() {
    this._service.store(this.form.value);
    this.clear();
  }

  clear() {
    this.form.reset();
  }
}
