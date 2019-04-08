import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StructComponent } from './component/struct/struct.component';
import { ParentComponent } from './component/parent/parent.component';
import { ViewChildParentComponent } from './component/view-child-parent/view-child-parent.component';
import { ServiceRouterComponent } from './component/service-router/service-router.component';
import { YoutubeComponent } from './component/youtube/youtube.component';
import { YoutubePlayerComponent } from './component/youtube-player/youtube-player.component';

const routes: Routes = [
  { path: 'struct', component: StructComponent },
  { path: 'input-output', component: ParentComponent },
  { path: 'view-child', component: ViewChildParentComponent },
  { path: 'service-router', component: ServiceRouterComponent },
  { path: 'youtube', component: YoutubeComponent, children: [{ path: ':id' , component: YoutubePlayerComponent}] },
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
