import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-livros-crud',
  templateUrl: './livros-crud.component.html',
  styleUrls: ['./livros-crud.component.css']
})
export class LivrosCrudComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  navigateToProductCreate(): void {
    this.router.navigate(['/acervo/create']);
  }

}
