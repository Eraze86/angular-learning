import { Component, OnInit } from '@angular/core';
import { AnimalComponent } from '../animal/animal.component';

@Component({
  selector: 'app-add-animals',
  templateUrl: './add-animals.component.html',
  styleUrls: ['./add-animals.component.scss']
})
export class AddAnimalsComponent implements OnInit {
  name:string = "";
  age: number = 0;
  color: string = "";
  constructor() { }

  ngOnInit(): void {

  }

// värdet skickas hit, theValue. Sen vill jag att this.name tar värdet från theValue. så jag kan använda det i html
  getAnimalFromInput(name: string, age: string, color: string){
    this.name = name;
    this.age = parseInt(age)
    this.color = color
    
   
    console.log(this.name, this.age, this.color)
    
  }

}
