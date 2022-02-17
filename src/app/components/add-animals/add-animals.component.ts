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
  getAnimalFromInput(theValue: any){
    this.name, this.age, this.color = theValue;
    
   
    console.log(this.name, this.age, this.color)
    
  }

}
