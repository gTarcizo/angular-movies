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
