import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title:string = 'Hola Mundo!';
  public counter:number = 10;


  setTen(): void{
     this.counter = 10
  }

  plusOne(): void{
    this.counter += 1;
  }
  minusOne(): void{
    this.counter -= 1;
  }

  value: string = ''
  changeValue(){
    this.value= 'Hola papus'
  }

  @ViewChild('submitButton') submitButton!: ElementRef;

  @HostListener('document:keydown.enter', ['$event'])

  handleKeyboardEvent(event: KeyboardEvent) {
    // Lógica que deseas ejecutar al presionar la tecla "Enter"
    console.log("Se presionó la tecla Enter");
  }




}
function HostListener(arg0: string, arg1: string[]): (target: AppComponent, propertyKey: "handleKeyboardEvent", descriptor: TypedPropertyDescriptor<(event: KeyboardEvent) => void>) => void | TypedPropertyDescriptor<(event: KeyboardEvent) => void> {
  throw new Error('Function not implemented.');
}

