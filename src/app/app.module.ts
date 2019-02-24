import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { Header } from "./index/header/app.header.component";
import { Bg } from "./index/bg/app.bg.component";
import { FeaturedGames } from "./index/FeaturedGames/app.FeaturedGames.component";
import { Follow } from "./index/Follow/app.Follow.component";
import { TopLiveChannels } from "./index/top-live-channels/app.TopLiveChannels.component";
import { TopPS4Channels } from "./index/top-ps4-channels/app.TopPS4Channels.component";
import { TopXboxOneChannels } from "./index/top-xboxone-channels/app.TopXboxOneChannels.component";
import { Footer } from "./index/Footer/app.Footer.component";
import { IndexComponent } from './index/index.component';
import { LiveComponent } from './live/live.component';
import { SidebarComponent } from './live/sidebar/sidebar.component';
import { Indexservice } from "./index/indexservice";
import { Bjservice } from "./index/bg/bjservice";
import { LoginComponent } from './index/login/login.component';
import { LivemainComponent } from './live/livemain/livemain.component';
import { ChatComponent } from './live/chat/chat.component';
const routes = [
  {path:'',component:IndexComponent},
  {path:'index',component:IndexComponent},
  {path:'live',component:LiveComponent},
  {path:'login',component:LoginComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    Header,
    Bg,
    FeaturedGames,
    Follow,
    TopLiveChannels,
    TopPS4Channels,
    TopXboxOneChannels,
    Footer,
    IndexComponent,
    LiveComponent,
    SidebarComponent,
    LoginComponent,
    LivemainComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes),HttpClientModule
  ],
  providers: [Indexservice,Bjservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
