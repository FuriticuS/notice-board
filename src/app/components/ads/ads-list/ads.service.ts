import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})

export class AdsService{
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

