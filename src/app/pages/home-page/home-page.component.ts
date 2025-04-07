import { Component, OnInit } from '@angular/core';
import { PostComponent } from "../../components/post/post.component";
import { HttpClient } from '@angular/common/http';
import { Post } from '../../types/post';
import { FeedComponent } from "../../components/feed/feed.component";

@Component({
  selector: 'app-home-page',
  imports: [FeedComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
  posts: Post[] = []

  constructor(private httpClient: HttpClient){ }

  ngOnInit(): void {
      this.fetchData
  }

  fetchData(){
    this.httpClient.get<{ posts: Post[] }>('http://localhost:3000/friends').subscribe((data: { posts: Post[] }) => {
      this.posts = data.posts
    })
  }
}
