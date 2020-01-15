import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-display',
  templateUrl: './card-display.component.html',
  styleUrls: ['./card-display.component.scss'],
})
export class CardDisplayComponent implements OnInit {
  @Input() card: any;

  constructor() { }

  ngOnInit() {}

}
