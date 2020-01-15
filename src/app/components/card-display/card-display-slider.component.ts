import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-display-slider',
  templateUrl: './card-display-slider.component.html'
})
export class CardDisplaySliderComponent {
    @Input() cards: Array<any>;
    slideOpts = {
        initialSlide: 0,
        speed: 3000,
        autoplay: true,
        loop: true
    };
    constructor() {}
}
