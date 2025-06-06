import { CurrencyPipe, DatePipe, NgFor, NgIf, NgOptimizedImage, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DatePipe, UpperCasePipe, CurrencyPipe, NgFor, NgOptimizedImage, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  movies?: any[];

  constructor(){
    setTimeout(() => {
      
      this.movies = [
        {
          title:'Batman the dark knight',
          launchDate: new Date().toLocaleDateString(),
          price: 423.4,
          poster : 'https://upload.wikimedia.org/wikipedia/pt/d/d1/The_Dark_Knight.jpg'
        },
        {
          title:'Spider Man 1',
          launchDate: new Date().toLocaleDateString(),
          price: 1223.4,
          poster : 'https://upload.wikimedia.org/wikipedia/pt/1/14/Spide-Man_Poster.jpg'
        },
        {
          title:'Venom',
          launchDate: new Date().toLocaleDateString(),
          price: 123.4,
          poster : 'https://m.media-amazon.com/images/I/813EeINX9RL._AC_UF894,1000_QL80_DpWeblab_.jpg'
        }
      ]

    }, 2000);
  }

  SumNumbers (numbers: number[]): number{
    let returnNumber: number = 0;
    numbers.forEach(element => {
      returnNumber += element;
    });
    return returnNumber;
  }
}
