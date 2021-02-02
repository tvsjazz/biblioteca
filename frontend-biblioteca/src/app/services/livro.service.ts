import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient, HttpRequest, HttpParams } from '@angular/common/http';
import { Livro } from '../models/livro.model';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  baseUrl = 'https://bibliotecaapi.herokuapp.com/';

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient
  ) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, '', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

  create(livro: Livro): Observable<Livro> {
    const url = `${this.baseUrl}acervo`;
    return this.http.post<Livro>(url, livro);
  }

  read(): Observable<Livro[]> {
    return this.http.get<Livro[]>(this.baseUrl + 'acervo');
  }

  update(id: string, dado: Livro): Observable<Livro> {
    return this.http.put<Livro>(`${this.baseUrl}reservar/${id}`, dado);
  }

  /* upload(files: Set<File>, url: string) {

    const formData = new FormData();
    files.forEach(file => formData.append('file', file, file.name));

    const request = new HttpRequest('POST', url, formData);
    return this.http.request(request);
  } */

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }
}
