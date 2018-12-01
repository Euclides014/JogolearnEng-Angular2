import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Quadrado } from '../shared/quadrado.model';
 
@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {

    @Input() public tentativas: number

  public quadrados: Quadrado[] = [
    new Quadrado(true), new Quadrado(true), new Quadrado(true)
  ]

  constructor() {

   }  
   
  ngOnChanges(){
    if(this.tentativas !== this.quadrados.length){
      let indice = this.quadrados.length - this.tentativas
      this.quadrados[indice - 1].cheio = false 
    }
   }

  ngOnInit() {
    
  }

}
