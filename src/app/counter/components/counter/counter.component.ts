import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `

  <p>Bienvenidos {{ counter }}</p>

  <button (click)="increaseBy(1)">+1</button>
  <button (click)="increaseBy(-1)">-1</button>
  <button (click)="reset()" >reset</button>


  `
})

export class CounterComponent  {
  public counter: number = 30;

  increaseBy(value: number):void{
    if (value ===1) {
      this.counter += value;
    }else{
      this.counter += value;
    }

  }
  reset():void{
    this.counter = 30;
  }
}
