import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../services/pokeapi.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  pokemon: any;

  constructor(
    private route: ActivatedRoute,
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.httpService.getPokemonDetails(+id).subscribe(data => {
        this.pokemon = data;
      });
    }
    
  }
  traducirNombre(nombre: string): string {
    switch (nombre) {
      case 'hp': return 'vida';
      case 'attack': return 'ataque';
      case 'defense': return 'defensa';
      case 'special-attack': return 'ataque especial';
      case 'special-defense': return 'defensa especial';
      case 'speed': return 'velocidad';
      default: return nombre;
    }
  }
  
}  