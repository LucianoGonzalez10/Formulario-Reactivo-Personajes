import { Component } from '@angular/core';
import { CharacterListComponent } from "../../components/character-list/character-list.component";

@Component({
  selector: 'app-personajes-page',
  standalone: true,
  imports: [CharacterListComponent],
  templateUrl: './personajes-page.component.html',
  styleUrl: './personajes-page.component.css'
})
export class PersonajesPageComponent {

}
