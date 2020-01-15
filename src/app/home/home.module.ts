import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { CardDisplayComponent } from '../components/card-display/card-display.component';
import { CardDisplaySliderComponent } from '../components/card-display/card-display-slider.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage, CardDisplayComponent, CardDisplaySliderComponent]
})
export class HomePageModule {

}
