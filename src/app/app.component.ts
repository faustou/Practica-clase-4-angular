import { Component } from '@angular/core';
interface Alumno {
  nombre: string;
  estado: 'aprobado' | 'desaprobado';
  edad: number;
  nota: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'practica-clase-04';

  alumnos: Alumno[] = [
    {
      nombre: 'Fausto',
      estado: 'aprobado',
      nota: 8,
      edad: 24
    },
    {
      nombre: 'Donna',
      estado: 'desaprobado',
      nota: 4,
      edad: 3
    },
    {
      nombre: 'Harvey',
      estado: 'desaprobado',
      nota: 2,
      edad: 40
    },
    {
      nombre: 'Mike',
      estado: 'aprobado',
      nota: 7,
      edad: 28
    },
  ]
}
