import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/pokeapi.service';
import { Router } from '@angular/router';
import { SearchbarChangeEventDetail } from '@ionic/angular';
import { IonSearchbarCustomEvent } from '@ionic/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
search($event: IonSearchbarCustomEvent<SearchbarChangeEventDetail>) {
throw new Error('Method not implemented.');
}

  public pokemons: any[] = [];
  likes: boolean[] = JSON.parse(localStorage.getItem('likes') || '[]') || new Array(this.pokemons.length).fill(false);
  filteredPokemons: any[] | undefined;

  constructor(
    private httpService: HttpService,
    private router: Router
  ) {}

  
  orderByPokemonName(pokemons: any[]): any[] {
    return pokemons.sort((a, b) => a.name.localeCompare(b.name));
  }
  ngOnInit(): void {
     this.getPokemons() 
     this.updateLikes();

  }

  
  getPokemons(){
    this.httpService.getPokemon().subscribe((data: any) => {
      this.pokemons = data.results;
      this.pokemons.forEach((pokemon: any, index) => {
        this.httpService.getPokemonDetails(index + 1).subscribe((details: any) => {
          pokemon.sprites = details.sprites;
          pokemon.name = details.name;
        });
      });
    });
  }  
  showPokemon(id: number) {
    this.httpService.getPokemonDetails(id).subscribe(data => {
      console.log('Detalles del Pokémon: ', data);
      this.router.navigate(['/details', id]);
    });
  }

  likePokemon(index: number, event: Event) {
    event.stopPropagation();
  
    this.likes[index] = !this.likes[index];
  
    localStorage.setItem('likes', JSON.stringify(this.likes));

    if (this.likes[index]) {
      this.httpService.addFavorite(this.pokemons[index]);
    } else {
      this.httpService.removeFavorite(this.pokemons[index]);
    }
  }
  updateLikes(): void {
    this.likes = JSON.parse(localStorage.getItem('likes') ?? '[]') || new Array(this.pokemons.length).fill(false);
  }

  searchPokemon(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      const searchTerm = (event.target as HTMLInputElement).value.toLowerCase();
      this.filteredPokemons = this.pokemons.filter(pokemon => {
        return pokemon.name.toLowerCase().includes(searchTerm);
      });
    }
  }
  handleKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.searchPokemon(event);
    }
  }
    
  
  
}

