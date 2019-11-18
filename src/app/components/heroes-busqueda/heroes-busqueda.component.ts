import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService, Heroe} from '../../services/heroes.services';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroes-busqueda',
  templateUrl: './heroes-busqueda.component.html'
})
export class HeroesBusquedaComponent implements OnInit {

  heroes:Heroe[] = [];
  termino:string = "";

  constructor(private activateRoute:ActivatedRoute, private _heroesService:HeroesService, private router:Router) {
  }

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
    })
  }

  verHeroe(idx:number) {
    // console.log(idx);
    this.router.navigate(['/heroe', idx]);
  }
}
