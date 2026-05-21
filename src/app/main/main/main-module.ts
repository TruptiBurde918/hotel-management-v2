import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Add this
import { MainRoutingModule } from './main-routing-module';
import { Footer } from './footer/footer';
import { Header } from './header/header';
import { Dasboard } from './dasboard/dasboard';

@NgModule({
  declarations: [
    Footer,
    Header,
    Dasboard
  ],
  imports: [
    CommonModule,
    RouterModule,
    MainRoutingModule
  ],
  exports: [
    Footer,
    Header,
    RouterModule
  ]
})
export class MainModule {}
