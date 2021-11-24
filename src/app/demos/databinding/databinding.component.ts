import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html'
})
export class DatabindingComponent {
  
  public contadorClique: number = 0;
  public urlImagem: string = "https://images.unsplash.com/photo-1559969143-b2defc6419fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2730&q=80";
  public nome: string = "";

  adicionarClique() {
    this.contadorClique++;
  }

  zerarClique() {
    this.contadorClique = 0;
  }

  KeyUp(event: any) {
    this.nome = event.target.value;
  }
}
