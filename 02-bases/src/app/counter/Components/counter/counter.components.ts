import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `

    <h3>Counter: {{counter}}</h3>

    <button (click)="plusOne(-1)"> -1</button>
    <button (click)="setTen()"> Reset</button>
    <button (click)="plusOne(1)">+1</button>
`
})


export class CounterComponent{
  public counter: number = 10

  plusOne( value: number): void{
    this.counter += value;
  }

  setTen() {
    this.counter = 10;
  }
}
