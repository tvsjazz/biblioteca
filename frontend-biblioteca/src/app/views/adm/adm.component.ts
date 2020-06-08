import { Component, OnInit } from '@angular/core';
import { Livro } from 'src/app/models/livro.model';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-adm',
  templateUrl: './adm.component.html',
  styleUrls: ['./adm.component.css']
})
export class AdmComponent implements OnInit {

  livros: Livro[];
  livrosEmprestimo: Livro[];
  livroSelecionado: Livro;
  colunas: string[] = ['titulo', 'autor', 'paginas', 'nomeReserva', 'createdAt', 'reservado', 'emprestado'];
  colunasEmprestimo: string[] = ['titulo', 'autor', 'nomeReserva', 'createdAt', 'emprestado'];
  searchText;

  constructor(private livroService: LivroService) { }

  ngOnInit(): void {
    this.livroService.read().subscribe(livros => {
      this.livros = livros;
    });
  }

  popularListaEmprestimo() {
    this.livros.forEach(livro => {
      if (livro.emprestado === false && livro.reservado === true) {
        this.livrosEmprestimo.push(livro);
      }
    });
  }

  popularLivroSelecionado(livro: Livro) {
    this.livroSelecionado = livro;
  }

  emprestarLivro(livro: Livro) {
    this.livroSelecionado = livro;
    livro.emprestado = true;
    this.livroService.update(livro._id, livro).subscribe(data => console.log(data));
  }

  devolver(livro: Livro) {
    livro.reservado = false;
    livro.emprestado = false;
    livro.nomeReserva = '';
    this.livroService.update(livro._id, livro).subscribe(data => console.log(data));
  }

}
