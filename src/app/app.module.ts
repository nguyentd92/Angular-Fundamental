import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StructComponent } from './component/struct/struct.component';
import { AppRoutingModule } from './app-routing.module';
import { DictionaryComponent } from './component/dictionary/dictionary.component';
import { ParentComponent } from './component/parent/parent.component';
import { ChildComponent } from './component/child/child.component';
import { ViewChildComponent } from './component/view-child/view-child.component';
import { ViewChildParentComponent } from './component/view-child-parent/view-child-parent.component';
import { ServiceRouterComponent } from './component/service-router/service-router.component';
import { DataService } from './service/data.service';
import { HttpClientModule } from '@angular/common/http';
import { YoutubeComponent } from './component/youtube/youtube.component';
import { YoutubePlayerComponent } from './component/youtube-player/youtube-player.component';

@NgModule({
  declarations: [
    AppComponent,
    StructComponent,
    DictionaryComponent,
    ParentComponent,
    ChildComponent,
    ViewChildComponent,
    ViewChildParentComponent,
    ServiceRouterComponent,
    YoutubeComponent,
    YoutubePlayerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
