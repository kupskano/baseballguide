import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuideDetailsPageRoutingModule } from './guide-details-routing.module';

import { GuideDetailsPage } from './guide-details.page';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatStepperModule } from '@angular/material/stepper';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuideDetailsPageRoutingModule,
    MatExpansionModule,
    MatStepperModule
  ],
  declarations: [GuideDetailsPage]
})
export class GuideDetailsPageModule {}
