import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DermafacialComponent } from './dermafacial/dermafacial.component';

import { HomepageComponent } from './homepage/homepage.component';
import { LaserhairreductionComponent } from './laserhairreduction/laserhairreduction.component';
import { SkintreatmentsComponent } from './skintreatments/skintreatments.component';

const routes: Routes = [
  { path:'',component:HomepageComponent},
  { path: 'Laser', component: LaserhairreductionComponent},
  { path: 'dermafacial', component:  DermafacialComponent},
  { path: 'skintreatments', component: SkintreatmentsComponent }

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
