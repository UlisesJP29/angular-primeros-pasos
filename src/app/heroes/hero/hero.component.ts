import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name:string = 'ironman';
  public age: number = 45;

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string {
    return `${ this.name } - ${ this.age }`;
  }

  changeHero():void {
    const newName: string = 'Spiderman';
    this.name = newName;
  }
  changeAge() {
    const newAge: number = 0;
    this.age = newAge;
  }
  resetForm():void{
  this.age = 45;
  }


}
