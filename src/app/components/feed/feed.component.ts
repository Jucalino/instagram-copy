import { Component, Input } from '@angular/core';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';
import { PostComponent } from '../post/post.component';
import { Post } from '../../types/post';

@Component({
  selector: 'app-feed',
  imports: [PostComponent, ListViewModule],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss'
})
export class FeedComponent {
  @Input() posts!: Post[]
}
