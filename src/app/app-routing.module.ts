import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StructComponent } from './struct/struct.component';
import { ParentComponent } from './parent/parent.component';
import { ViewChildParentComponent } from './view-child-parent/view-child-parent.component';

const routes: Routes = [
  { path: 'struct', component: StructComponent },
  { path: 'input-output', component: ParentComponent },
  { path: 'view-child', component: ViewChildParentComponent },
  { path: '**', pathMatch:'full', redirectTo: 'struct' }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
