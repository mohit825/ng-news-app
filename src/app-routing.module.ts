import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';
import { SourceComponent } from "./app/source/source.component";
import { AppComponent } from './app/app.component';
import { NewsDetailComponent } from './app/news-detail/news-detail.component';


const routes: Routes = [

  
  { path: '' , component : SourceComponent },
  { path: 'news/:id' , component : NewsDetailComponent }

]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
// export  const routingComponents = [  SourceComponent , NewsDetailComponent]
