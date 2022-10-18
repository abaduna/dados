import { Component } from '@angular/core';
import { match } from 'assert';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dadoIxq = "./../assets/img/dice6.png";
  dadoderecho = "./../assets/img/dice6.png";
  numero1: Number | undefined  
  numero2: Number | undefined 
  tirardados() {
  this.numero1 = Math.ceil((Math.random()*6))
 
  this.numero2 =Math.ceil((Math.random()*6))
  console.log(this.numero1)
  console.log(this.numero2)
  this.dadoIxq = "./../assets/img/dice"+ this.numero1 +".png"
  this.dadoderecho = "./../assets/img/dice"+ this.numero2 +".png"
  
}
  title = 'dados';
  
}
