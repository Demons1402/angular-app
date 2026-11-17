import { Component } from '@angular/core';
import { Hero } from '../../hero/hero';
import { Pago } from '../../pago/pago';
import { Contacto } from '../../contacto/contacto';
import { Posts } from '../../posts/posts';
import { Comentarios } from '../../comentarios/comentarios';
@Component({
  imports: [Hero,Pago,Contacto,Comentarios,Posts],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {}
