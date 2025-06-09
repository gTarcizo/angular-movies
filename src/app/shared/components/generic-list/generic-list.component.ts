import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-generic-list',
  imports: [NgIf],
  templateUrl: './generic-list.component.html',
  styleUrl: './generic-list.component.css'
})
export class GenericListComponent {
  @Input({required:true}) elements :any;

}
