import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';

import { Frase } from '../shared/frase.model'
import { FRASES } from './frase-mock'
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {

  public frases: Frase[] = FRASES
  public instrucao: string = 'Traduza a frase abaixo:'
  public resposta: string = ''

  public rodada: number = 0
  public rodadaFrase: Frase

  public progresso: number = 0

  public tentativa: number = 3

  @Output() public encerrarJogo: EventEmitter <string> = new EventEmitter ()

  constructor() { 
    this.atualizarRodada()
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    console.log('O painel foi destruido!!!')
  }

  public atualizaResposta (resposta: Event): void{
    this.resposta = (<HTMLInputElement>resposta.target).value
  }

  verificaResposta (): void{

      if(this.rodadaFrase.frasePtBr == this.resposta){
        
    //trocando a frase da aplicação
    this.rodada++
    //alterando a barra de progresso
    this.progresso = this.progresso + (100 / this.frases.length)
    
    if (this.rodada === 10){
      this.encerrarJogo.emit('vitoria')

    }
    //alterando a frase exibida ao usuario
    this.atualizarRodada()
      }else{
        this.tentativa--
        if (this.tentativa === -1){
          this.encerrarJogo.emit('derrota')
        }
      }   
  }
  public atualizarRodada(): void{
    //atualizando a frase da rodada    
    this.rodadaFrase = this.frases[this.rodada]
    //limpar reposta
    this.resposta = ''
  }

}
