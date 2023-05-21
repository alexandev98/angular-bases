import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  /**
   * *En caso de no recibir ninguna arreglo del padre
   * *el arreglo con el nombre de Trunks se mostrara
   */
  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }]

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  public onDeleteCharacter(id:string):void{
    //TODO: Emitir el ID del personaje

    this.onDelete.emit(id);
  }


}
