import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-demo',
  styleUrl: './demo.css',
  templateUrl: './demo.html',
})
export class Demo {
  nombre: string = 'Ricardo';
  apellidoPaterno: string = 'Nepomuceno';
  apellidoMaterno: string = 'Martínez';
  edad: number = 19;
  mesNacimiento: string = '20-07-2007';
  municipio: string="Fortín de las Flores Ver.";
  carrera: string = 'Ingeniería en Desarrollo de Software Multiplataforma';

  esEstudiante: boolean=true;
  hijos:boolean=true;
  ig:boolean=true;
  face:boolean=true;
  github:boolean=true;
  feliz:boolean=true;

  
gustos = ["Tocar la guitarra", "Jugar videojuegos", "Ver anime", "Programar"];
juegos = ["GTA V", "Minecraft", "The Legend of Zelda: Breath of the Wild", "Super Mario Odyssey","Red Dead Redemption 2","Dark Souls III", "The Witcher 3: Wild Hunt", "Hollow Knight", "Celeste", "Stardew Valley","Undertale","CrashBandicoot N. Sane Trilogy"];
deportes = ["Fútbol", "Baloncesto", "Natación", "Ciclismo","Tenis","Voleibol","Boxeo","Artes marciales","Atletismo","Esgrima"];
jugadores = ["Lionel Messi", "Cristiano Ronaldo", "LeBron James", "Serena Williams","Usain Bolt","Michael Jordan","Roger Federer","Tiger Woods","Tom Brady","Novak Djokovic"];
famosos= ["Dwayne Johnson", "Taylor Swift", "Leonardo DiCaprio", "Beyoncé","Robert Downey Jr.","Ariana Grande","Chris Hemsworth","Emma Watson","Will Smith","Jennifer Lawrence"];
comidas = ["Pizza", "Hamburguesa", "Tacos", "Sushi","Pasta","Ensalada","Pollo frito","Helado","Chocolates","Frutas"];
}
