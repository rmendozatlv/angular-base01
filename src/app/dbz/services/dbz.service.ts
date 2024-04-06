import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid}  from 'uuid'
@Injectable({
  providedIn: 'root'
})
export class DBZService {
  public characters: Character[] = [
    {
      id: uuid(),
      "name": "Ruben",
      "power": 0
    },
    {
      id: uuid(),
      "name": "Pedro",
      "power": 0
    },
    {
      id: uuid(),
      "name": "Jorge",
      "power": 0
    },
    {
      id: uuid(),
      "name": "Raul",
      "power": 0
    },
    {
      id: uuid(),
      "name": "Juan",
      "power": 0
    },
    {
      id: uuid(),
      "name": "Katty",
      "power": 0
    }
  ]

  onNewCharacterPage( character : Character): void{
    //character.id = uuid()
    const newCharacter : Character = {id: uuid(), ...character}
    this.characters.push(newCharacter);
  }

  //OnDeleteCharacter(index: number): void{
  //  this.characters.splice(index,1);
  //}

  OnDeleteCharacterByID(id: string){
    this.characters = this.characters.filter(character => character.id !== id );
  }

}
