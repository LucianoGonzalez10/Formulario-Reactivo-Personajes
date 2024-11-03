import { Component, EventEmitter, inject, Output } from '@angular/core';
import { Personaje } from '../../interface/personaje.interface';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PersonajeService } from '../../service/personaje.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-character-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './character-form.component.html',
  styleUrl: './character-form.component.css'
})
export class CharacterFormComponent {
  @Output()
  emitirPersonaje : EventEmitter<Personaje> = new EventEmitter();

  fb = inject(FormBuilder);
  personajeService = inject(PersonajeService);

  formulario = this.fb.nonNullable.group({
    id:[0, [Validators.required]],
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    alias:  ['', [Validators.required, Validators.minLength(3)]],
    powers: [[]],
    descripcion: ['', [Validators.required, Validators.minLength(4)]]
  })

  addPersonaje(){
    if(this.formulario.invalid) return ;
    
    const personaje = this.formulario.getRawValue();
    this.addPersonajeDb(personaje);
    this.emitirPersonaje.emit(personaje);
  }

  addPersonajeDb(personaje : Personaje){
    this.personajeService.postPersonajes(personaje).subscribe(
      {
        next: (personaje : Personaje) =>{
          console.log(personaje);
          alert('Personaje cargado');
        },
        error:(e: Error) =>{
          console.log(e.message);
        }
      }
    )
  }
}
