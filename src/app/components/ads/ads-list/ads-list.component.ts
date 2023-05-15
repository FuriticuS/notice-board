import { Component, OnInit} from '@angular/core';
import {AdsService} from "./ads.service";

@Component({
  selector: 'app-ads-list',
  templateUrl: './ads-list.component.html',
  styleUrls: ['./ads-list.component.scss']
})
export class AdsListComponent implements OnInit{
  data: any[] = [];

  constructor(
    private addService: AdsService,
    private _postsServices: AdsService
  ) {}

  ngOnInit() {
    this.data = this.addService.getData();
    this._postsServices.getPosts().subscribe(posts =>{
      console.log(posts);
    });
  }
}
