import { Component, Input } from '@angular/core';
import { CarouselModule } from '@syncfusion/ej2-angular-navigations';
import { Post } from '../../types/post';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post',
  imports: [CarouselModule, CommonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  @Input() post!: Post
}
