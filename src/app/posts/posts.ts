import { Component, inject } from '@angular/core';
import { Posts as PostServicio } from '../services/posts';
import { Post } from '../models/posts.model';

@Component({
  imports: [],
  selector: 'app-posts',
  styleUrl: './posts.css',
  templateUrl: './posts.html',
})
export class Posts {
  posts:Post[] = []
  private servicio = inject(
    PostServicio

  )
  ngOnInit(): void {
    this.servicio.obtenerPosts().subscribe(
      {
        next: (dato)=>{
          this.posts = dato
          console.log(dato.slice(0,8))
        }
      }
    )
  }
}