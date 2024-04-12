import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public Name: string ='IronMan';
  public NewName: string ='';
  public Age: number =45;
  public NewAge: string = "";

  get capitalizeName():string {
    return this.Name.toUpperCase()
  }
  getHeroDescription():string {
    return `${this.Name} - ${this.Age}`
  }
  ChangeHero():void {
    this.Name = this.NewName;
  }

  cambiarEdad() {

    const nuevaEdadNumero = Number(this.NewAge);
    if (!isNaN(nuevaEdadNumero)) {
      this.Age = nuevaEdadNumero;
    }

}
  SetSpiderman(){
      this.Age =25
      this.Name ="Spiderman"
    }
    SetIronman(){
      this.Age =45
      this.Name ="IronMan"
    }
}
