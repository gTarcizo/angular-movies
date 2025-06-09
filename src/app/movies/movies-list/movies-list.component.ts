import { CurrencyPipe, DatePipe, NgFor, NgIf, NgOptimizedImage, UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { GenericListComponent } from "../../shared/components/generic-list/generic-list.component";
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-movies-list',
  imports: [DatePipe, UpperCasePipe, CurrencyPipe, NgFor, NgOptimizedImage, NgIf, MatIconModule, MatButtonModule, GenericListComponent, MatCardModule],
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
