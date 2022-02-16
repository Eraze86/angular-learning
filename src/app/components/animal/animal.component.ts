import { Component, OnInit } from '@angular/core';
import { Animals } from 'src/app/modules/animals';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss']
})
export class AnimalComponent implements OnInit {
  animal:Animals [] = [new Animals ("gris", 3, "rosa")]
  
  constructor() { }

  ngOnInit(): void {
    
  }

}
