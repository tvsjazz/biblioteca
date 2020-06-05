import { Component, OnInit } from '@angular/core';
import { LivroService } from 'src/app/services/livro.service';
import { Livro } from 'src/app/models/livro.model';

@Component({
  selector: 'app-acervo',
  templateUrl: './acervo.component.html',
  styleUrls: ['./acervo.component.css']
})
export class AcervoComponent implements OnInit {

  livros: Livro[];
  livroSelecionado: Livro;
  displayedColumns: string[] = ['titulo', 'autor', 'paginas'];
  searchText;

  constructor(private livroService: LivroService) { }

  ngOnInit(): void {
    this.livroService.read().subscribe(livros => {
      this.livros = livros;
    });
  }

  selecionaLivro(data: Livro) {
    if (data) {
      this.livroSelecionado = data;
    } else {
      this.livroSelecionado = null;
    }
  }

  reservar(id: string) {
    this.livroSelecionado.reservado = true;
    this.livroService.update(id, this.livroSelecionado).subscribe(livro => console.log(livro));
  }

}
