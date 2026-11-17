import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule], // Necesario para usar *ngFor y el pipe | currency
  templateUrl: './productos.html',
  styleUrls: ['./productos.css']
})
export class Productos {

  // Lista de autos simulada para la agencia
  listaAutos = [
    {
      marca: 'Chevrolet',
      modelo: 'Onix LT',
      anio: 2025,
      precio: 320000,
      transmision: 'Automática',
      motor: '1.0L Turbo',
      imagen: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=80'
    },
    {
      marca: 'Nissan',
      modelo: 'Versa Sense',
      anio: 2026,
      precio: 350000,
      transmision: 'Manual / CVT',
      motor: '1.6L 4 Cilindros',
      imagen: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=600&q=80'
    },
    {
      marca: 'Mazda',
      modelo: 'Mazda 3 Sedán',
      anio: 2026,
      precio: 440000,
      transmision: 'Automática',
      motor: '2.5L SkyActiv-G',
      imagen: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=600&q=80'
    },
    {
      marca: 'Kia',
      modelo: 'Forte GT-Line',
      anio: 2025,
      precio: 410000,
      transmision: 'Automática DCT',
      motor: '1.6L Turbo',
      imagen: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=600&q=80'
    },
    {
      marca: 'Volkswagen',
      modelo: 'Taos Comfortline',
      anio: 2026,
      precio: 515000,
      transmision: 'Tiptronic',
      motor: '1.4L TSI',
      imagen: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=600&q=80'
    },
    {
      marca: 'Toyota',
      modelo: 'Corolla Hybrid',
      anio: 2026,
      precio: 480000,
      transmision: 'E-CVT',
      motor: '1.8L Híbrido',
      imagen: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=600&q=80'
    }
  ];

  // Función al dar clic en cotizar
  cotizarAuto(modelo: string) {
    alert(`Has seleccionado cotizar el modelo: ${modelo}. Un asesor se pondrá en contacto contigo.`);
  }
}