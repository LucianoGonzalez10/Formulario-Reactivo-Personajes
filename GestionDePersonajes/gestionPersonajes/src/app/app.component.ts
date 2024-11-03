import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonajesPageComponent } from "./personajes/pages/personajes-page/personajes-page.component";
import { CommonModule } from '@angular/common';
import { CharacterListComponent } from './personajes/components/character-list/character-list.component';
import { HttpClientModule } from '@angular/common/http';  // Añade esta importación

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    PersonajesPageComponent, 
    CommonModule, 
    CharacterListComponent,
    HttpClientModule  // Añade este módulo a los imports
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gestionPersonajes';
}