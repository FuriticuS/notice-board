import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: "root"
})

export class AdsService{
  constructor(
    private httpClient: HttpClient
  ) {}

  getPosts(){
    return this.httpClient.get('http://90.156.209.122:5000/category')
  }

  getData(){
    return new Array(20).fill({
      id: 0,
      title: 'Гитара фендер',
      price: 20000,
      imgSrc: 'https://placehold.co/600x400',
      createdAt: 'Сегодня 14:12',
      address: 'Москва, Ленинский проспект',
    })
  }
}

