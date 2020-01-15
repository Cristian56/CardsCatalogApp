import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  cards = [{
    name: 'Edelgard',
    title: 'She Who Bares Her Fangs at the Gods',
    quote: 'So youre another of the goddesss vanguard. Come at me, so that I may put you out of your misery!',
    img: 'exampleCard.png'
  }, {
    name: 'Byleth',
    title: 'She Who Bears the Goddess Within',
    img: 'exampleCard2.png'
  }];

  constructor() {}

}
