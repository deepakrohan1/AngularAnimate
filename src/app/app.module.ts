import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdvComponent } from './adv/adv.component';
import { BasicComponent } from './basic/basic.component';
import { ContainedComponent } from './contained/contained.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdvComponent,
    BasicComponent,
    ContainedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
