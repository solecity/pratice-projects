import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent {
  url: string = 'https://google.com';
  urlImagem: string = 'https://picsum.photos/seed/picsum/200/300';
  cursoAngular: boolean = true;
  valorAtual: string = '';
  valorSalvo: string = '';
  isMouseOver: boolean = false;
  nomeDoCurso: string = 'Angular';
  valorInicial: string = '15';

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert('Botao Clicado');
  }

  onKeyUp(e: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>e.target).value;
  }

  salvarValor(v: string) {
    this.valorSalvo = v;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(e: any) {
    console.log(e.novoValor);
  }

  constructor() {}
}
