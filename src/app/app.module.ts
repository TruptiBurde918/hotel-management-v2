import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Add this
import { App } from './app';
import { MainModule } from './main/main/main-module';

@NgModule({
  declarations: [App],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]), // This provides ActivatedRoute and other services
    MainModule
  ],
  bootstrap: [App]
})
export class AppModule {}
