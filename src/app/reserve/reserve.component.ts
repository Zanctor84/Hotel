import { Component, OnInit } from '@angular/core';
import {PostsService} from '../shared/posts.service';
import {Observable} from 'rxjs';
import {Post} from '../shared/interfaces';


@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.scss']
})
export class ReserveComponent implements OnInit {

  reserveRooms = [];
  totalPrice = 0;

  constructor(
      private productServ: PostsService
  ) { }

  ngOnInit(): void {
    this.reserveRooms = this.productServ.cartRoom;
    for (let i = 0; i < this.reserveRooms.length; i++)
    {
      this.totalPrice += +this.reserveRooms[i].price;
    }
  }

  delete(room) {
      this.totalPrice -= +room.price;
      this.reserveRooms.splice(this.reserveRooms.indexOf(room), 1);
  }

}
