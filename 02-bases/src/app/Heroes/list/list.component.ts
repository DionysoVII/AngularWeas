import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public Heros: string[] = ['Green Lanter', 'Aquaman', 'WonderWoman', 'Cyborg', 'Captain America','Ant-Man', 'Falcon', 'Spiderman','IronMan', 'Jesus'];
  public deletedOne?: string;
  removeLast():void {
    this.deletedOne= this.Heros.pop()

  }


}
