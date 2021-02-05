import { Component, OnInit } from '@angular/core';
import {Post} from '../shared/interfaces';
import {Observable} from 'rxjs';
import {PostsService} from '../shared/posts.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {


    posts$: Observable<Post[]>;
    searchStr = '';

    constructor(
        private postsService: PostsService
    ) { }

    ngOnInit() {
        this.posts$ = this.postsService.getAll();
    }

}
