import { Component } from '@angular/core';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MoviesListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  upcomingMovies: any;
  inTheatersMovies: any;

  constructor(){
    setTimeout(() => {
      this.upcomingMovies = [
        {
          title:'Venom',
          launchDate: new Date(),
          price: 123.4,
          poster : 'https://m.media-amazon.com/images/I/813EeINX9RL._AC_UF894,1000_QL80_DpWeblab_.jpg'
        }
      ];

      this.inTheatersMovies = [
        {
          title:'Batman the dark knight',
          launchDate: new Date('2000-06-22'),
          price: 423.4,
          poster : 'https://upload.wikimedia.org/wikipedia/pt/d/d1/The_Dark_Knight.jpg'
        },
        {
          title:'Spider Man 1',
          launchDate: new Date(),
          price: 1223.4,
          poster : 'https://upload.wikimedia.org/wikipedia/pt/1/14/Spide-Man_Poster.jpg'
        }
      ];

    }, 500);
  }
}
