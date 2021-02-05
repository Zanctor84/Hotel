import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../interfaces';


@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  @Input()
  post: Post;

  constructor(

  ) { }

  ngOnInit() {
  }

}
