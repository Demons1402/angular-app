import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { Comentario } from '../models/comentario.model';

@Service()
export class Comentarios {
    private readonly url = 'https://jsonplaceholder.typicode.com/comments'

    private readonly http = inject(HttpClient)

        obtenerComentarios (): Observable<Comentario[]> {
            return this.http.get<Comentario[]>(this.url)
        }
    
}