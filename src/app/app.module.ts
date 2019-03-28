import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { AppRoutingModule  } from '../app-routing.module';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { SourceComponent } from './source/source.component';


@NgModule({
  declarations: [
    AppComponent,
    SourceComponent,
    NewsDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
