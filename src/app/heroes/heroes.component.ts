import { Component } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  /**hero="Windstorm";*/

  /**Refactoring the hero property to be of type Hero */
  hero : Hero = {
    id:1,
    name: 'Windstorm'
  };
}
