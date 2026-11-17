import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/posts.model';

@Service()
export class Posts {
    private readonly url = 'https://jsonplaceholder.typicode.com/posts'
    private readonly http = inject(HttpClient)

    obtenerPosts():Observable<Post[]>{
        return this.http.get<Post[]>(this.url)
    }

}