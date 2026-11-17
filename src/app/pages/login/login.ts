import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // ¡Muy importante para usar [(ngModel)]!

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule], // Asegúrate de importar FormsModule
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  
  // Objeto para capturar los datos del formulario
  credenciales = {
    usuario: '',
    password: ''
  };

  // Función que se ejecuta al darle clic al botón "Ingresar"
  iniciarSesion() {
    if (this.credenciales.usuario === '') {
      alert('Por favor, selecciona un tipo de usuario válido.');
      return;
    }

    console.log('Intentando iniciar sesión con los siguientes datos:');
    console.log('Rol seleccionado:', this.credenciales.usuario);
    // Aquí normalmente conectarías con tu backend (ej. usando un servicio HTTP hacia MongoDB/Java)
  }
}