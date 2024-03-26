import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/pokeapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  public favorites: any[] = [];

  constructor(
    private httpService: HttpService,
    private router: Router,
    
  ) {}

  ngOnInit() {
    this.getFavorites();
  }

  getFavorites() {
    this.favorites = this.httpService.getFavorites();
  }

  showPokemon(id: number) {
    this.httpService.getPokemonDetails(id).subscribe(data => {
      console.log('Detalles del Pokémon: ', data);
      this.router.navigate(['/details', id]);
    });
  }

  removeFavorite(index: number, event: Event) {
    event.stopPropagation();
  
    this.httpService.removeFavorite(this.favorites[index]);
  
    this.favorites = this.httpService.getFavorites();
  
    const likesString: string | null = localStorage.getItem('likes');
    const homePageLikes = likesString !== null ? JSON.parse(likesString) : [];
    homePageLikes[index] = false;
    localStorage.setItem('likes', JSON.stringify(homePageLikes));
  }
}    
