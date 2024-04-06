import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DBZService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  get characters () : Character[]{
    return this.dbzService.characters;
  }

  constructor(private dbzService: DBZService) { }

   deleteCharacterByID(id: string): void{
     this.dbzService.OnDeleteCharacterByID(id);
   }

   newCharacter(character: Character): void{
     this.dbzService.onNewCharacterPage(character);
   }
}
