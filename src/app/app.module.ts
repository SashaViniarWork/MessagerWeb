import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {NavigateComponent} from './navigate/navigate.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ButtonsComponent} from './navigate/buttons/buttons.component';
import {ListMessageComponent} from './navigate/list-message/list-message.component';
import {ProfileComponent} from './navigate/profile/profile.component';
import {InfoChatComponent} from './dashboard/info-chat/info-chat.component';
import {MessagerListComponent} from './dashboard/messager-list/messager-list.component';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavigateComponent,
    DashboardComponent,
    ButtonsComponent,
    ListMessageComponent,
    ProfileComponent,
    InfoChatComponent,
    MessagerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
