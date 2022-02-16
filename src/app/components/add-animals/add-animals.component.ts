import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-animals',
  templateUrl: './add-animals.component.html',
  styleUrls: ['./add-animals.component.scss']
})
export class AddAnimalsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  name:string = "";
  age: number = 
  color: string: = "";

  getAnimalFromInput(theValue: any){
    this.name = theValue;
    console.log(this.name)
  }

}
