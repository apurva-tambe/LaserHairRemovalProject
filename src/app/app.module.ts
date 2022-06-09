import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomepageComponent } from './homepage/homepage.component';
import { DemohairComponent } from './demohair/demohair.component';
import { LaserhairreductionComponent } from './laserhairreduction/laserhairreduction.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SkintreatmentsComponent } from './skintreatments/skintreatments.component';
import { DermafacialComponent } from './dermafacial/dermafacial.component';


@NgModule({
  declarations: [
    AppComponent,
  
    HomepageComponent,
       DemohairComponent,
       LaserhairreductionComponent,
     
       SkintreatmentsComponent,
             DermafacialComponent,
            
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
