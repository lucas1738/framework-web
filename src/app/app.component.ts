import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercício 1';
  exibir: boolean = true;

 exibeImagem(){
    const estado = this.exibir;
    this.exibir = !estado;
  }

}
