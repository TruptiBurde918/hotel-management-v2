import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Add this
import { MainRoutingModule } from './main-routing-module';
import { Footer } from './footer/footer';
import { Header } from './header/header';

@NgModule({
  declarations: [Footer, Header],
  imports: [
    CommonModule,
    RouterModule, // Add this
    MainRoutingModule
  ],
  exports: [
    Footer,
    Header,
    RouterModule // Export this so app.html can use router-outlet and routerLink
  ]
})
export class MainModule {}
