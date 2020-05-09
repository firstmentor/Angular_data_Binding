import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstpart';

  para:string="My company is : ";


  name:string ="pninfosys";




  num1:number=28;
  num2:number=2;

  date =new Date();

  //property binding

  para1:string='How to developer'

  hide:boolean=true;  //false boolean value use property binding

   
}
