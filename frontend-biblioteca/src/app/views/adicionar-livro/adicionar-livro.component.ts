import { Component, OnInit } from '@angular/core';
import { Livro } from 'src/app/models/livro.model';
import { LivroService } from 'src/app/services/livro.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-adicionar-livro',
  templateUrl: './adicionar-livro.component.html',
  styleUrls: ['./adicionar-livro.component.css']
})
export class AdicionarLivroComponent implements OnInit {


  cadastrarForm: FormGroup;

  constructor(
    private livroService: LivroService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    this.cadastrarForm = this.formBuilder.group({
      titulo: [null, [Validators.required]],
      autor: [null, Validators.required],
      paginas: [null, Validators.required],
      descricao: [null, Validators.required]
    });
  }

  adicionarLivro() {
    this.livroService.create(this.cadastrarForm.value).subscribe(data => {
      console.log(data);
      this.router.navigate(['/adm']);
    });
  }

}
