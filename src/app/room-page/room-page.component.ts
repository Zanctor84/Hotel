import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {PostsService} from '../shared/posts.service';
import {Observable} from 'rxjs';
import {Post} from '../shared/interfaces';
import {switchMap} from 'rxjs/operators';


@Component({
  selector: 'app-room-page',
  templateUrl: './room-page.component.html',
  styleUrls: ['./room-page.component.scss']
})
export class RoomPageComponent implements OnInit {

  post$: Observable<Post>;

  constructor(
      private route: ActivatedRoute,
      private postsService: PostsService,
      private productServ: PostsService
  ) { }

  ngOnInit() {
    this.post$ = this.route.params
        .pipe(switchMap( (params: Params) => {
          return this.postsService.getById(params['id']);
        }));
  }

    addRoom(post) {
        this.productServ.addRoom(post);
    }
}
