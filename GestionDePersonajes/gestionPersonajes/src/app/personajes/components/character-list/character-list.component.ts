import { Component, inject, OnInit } from '@angular/core';
import { CharacterFormComponent } from '../character-form/character-form.component';
import { Personaje } from '../../interface/personaje.interface';
import { PersonajeService } from '../../service/personaje.service';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CharacterFormComponent],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css'
})
export class CharacterListComponent {
  ngOnInit(): void{
    this.listarPersonajes();
  }

  listaPersonajes : Personaje[] = [];

  personajeService = inject(PersonajeService);

  agregarPersonaje(personaje : Personaje){
    this.listaPersonajes.push(personaje);
  }

  listarPersonajes(){
    this.personajeService.getPersonajes().subscribe({
      next: (personajes : Personaje[]) =>{
        this.listaPersonajes = personajes;
      },
      error: (e: Error) =>{
        console.log(e.message);
      }
    })
  }

  // ... código existente ...

eliminarPersonaje(id: number){
  this.personajeService.eliminarPersonaje(id).subscribe({
    next: () => this.listarPersonajes(),
    error: (error) => {
      console.error('Error al eliminar el personaje:', error);
      // Aquí puedes agregar lógica adicional para manejar el error
      // Por ejemplo, mostrar un mensaje al usuario
    }
  });
}

}
