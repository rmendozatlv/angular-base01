import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {

  @Output()
  onDeleteCharacterPage: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = []

  onDeleteCharacter(id: string): void{
      this.onDeleteCharacterPage.emit(id);
  }

  constructor() { }
}
