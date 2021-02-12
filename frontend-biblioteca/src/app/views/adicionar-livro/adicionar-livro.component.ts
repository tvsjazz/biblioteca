import { Component, OnInit } from '@angular/core';
import { Livro } from 'src/app/models/livro.model';
import { LivroService } from 'src/app/services/livro.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidarCamposService } from 'src/app/services/validar-campos.service';
import { MatDialog } from '@angular/material/dialog';
import { AlertaComponent } from 'src/app/shared/components/alerta/alerta.component';
import { Alerta } from 'src/app/shared/models/alerta';

@Component({
  selector: 'app-adicionar-livro',
  templateUrl: './adicionar-livro.component.html',
  styleUrls: ['./adicionar-livro.component.css']
})
export class AdicionarLivroComponent implements OnInit {


  cadastrarForm: FormGroup;

  constructor(
    public validacao: ValidarCamposService,
    public dialog: MatDialog,
    private livroService: LivroService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  get f() {
    return this.cadastrarForm.controls;
  }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    this.cadastrarForm = this.formBuilder.group({
      titulo: [null, [Validators.required, Validators.maxLength(150)]],
      autor: [null, [Validators.required, Validators.maxLength(100)]],
      paginas: [null, [Validators.required, Validators.max(5000)]],
      descricao: [null, [Validators.required, Validators.maxLength(1000)]]
    });
  }

  submit(): void {
    if (this.cadastrarForm.invalid) {
      return;
    }

    const livro = this.cadastrarForm.getRawValue() as Livro;
    this.salvar(livro);
  }

  reiniciarForm(): void {
    this.cadastrarForm.reset();
  }

  private salvar(livro: Livro): void {
    this.livroService.create(livro).subscribe(data => {
      const config = {
        data: {
          btnSucesso: 'Ir para a listagem',
          btnCancelar: 'Cadastrar um novo livro',
          corBtnCancelar: 'primary',
          possuiBtnFechar: true
        } as Alerta
      };
      const dialogRef = this.dialog.open(AlertaComponent, config);
      dialogRef.afterClosed().subscribe((opcao: boolean) => {
        if (opcao) {
          this.router.navigate(['/adm']);
        } else {
          this.reiniciarForm();
        }
      });
    },
    () => {
      const config = {
        data: {
          titulo: 'Erro ao salvar o livro!',
          descricao: 'Não conseguimos salvar seu registro, por favor tentar novamente mais tarde',
          corBtnSucesso: 'warn',
          btnSucesso: 'Fechar'
        } as Alerta
      };
      this.dialog.open(AlertaComponent, config);
    });
  }

}
