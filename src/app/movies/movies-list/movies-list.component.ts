import { CurrencyPipe, DatePipe, NgFor, NgIf, NgOptimizedImage, UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-movies-list',
  imports: [DatePipe, UpperCasePipe, CurrencyPipe, NgFor, NgOptimizedImage, NgIf, MatIconModule],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css'
})
export class MoviesListComponent {
  @Input({required: true}) 
  movies?: any[];

  
  addMovie(){
    var movie:any ={
          title:'Black Panther',
          launchDate: new Date('2018-06-22'),
          price: 1321.4,
          poster : 'https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg'
        };

      this.movies?.push(movie);
  }

  removeMovie(movie :any){
    
    this.movies?.splice(this.movies?.findIndex((x: any) => x === movie), 1);
  }
}
