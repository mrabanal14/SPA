import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService, Heroe} from '../../services/heroes.services';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  heroe:any = {};
  heroes:Heroe[] = [];

  constructor(private activateRoute:ActivatedRoute, private _heroesService:HeroesService, private router:Router) {
      this.activateRoute.params.subscribe(params => {
        this.heroe = _heroesService.getHeroe(params['id']);
      })
  }

  ngOnInit() {
  }

  verHeroes() {
    // this.heroes = this._heroesService.getHeroes();
    this.router.navigate(['/heroes']);
  }
}
