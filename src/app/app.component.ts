import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  count = 0;
  nome = 'Gaaaaabi';

  pessoas = [
    {
      nome: 'Gabriela',
      sobrenome: 'Vespoli',
    },
    {
      nome: 'Gabrielle',
      sobrenome: 'Vespoli',
    },
    {
      nome: 'Gabizinha',
      sobrenome: 'Vespoli',
    },
    {
      nome: 'Gabizão',
      sobrenome: 'Vespoli',
    },
  ];

  constructor() {}

  ngOnInit() {
    console.log(this.pessoas);
    let interval = setInterval(() => {
      this.count++;
      if (this.count === 10) {
        clearInterval(interval);
      }
    }, 1000);
  }

  clicou(nome: string): void {
    console.log('Clicou', nome);
  }
}
