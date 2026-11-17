import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-contacto',
  styleUrl: './contacto.css',
  templateUrl: './contacto.html',
})
export class Contacto {
  readonly formulario = new FormGroup(
    {
    nombre: new FormControl('',[Validators.required]),
    correo: new FormControl('',[Validators.required,Validators.email]),
    numero: new FormControl('',[Validators.required]),
    comentario: new FormControl('',[Validators.required, Validators.minLength(10)])
  }
)
  invalido(nombre: string): boolean{
    const control = this.formulario.get(nombre);
    return !!control && control.touched && control.invalid;
  }
  envio(): void{
    console.log("mensaje enviado");
    if(this.formulario.invalid){
      this.formulario.markAllAsTouched();
      return
    }
    console.log('Mensaje enviado',this.formulario.value);
  }
}
