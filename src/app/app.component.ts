import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  form!: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}
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
    console.log(this.form.value);
  }

  clear() {
    this.form.reset();
  }
}
