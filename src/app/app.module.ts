import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MessagesLogFiltersService } from './shared/services/messages-log-filters/messages-log-filters.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
      MessagesLogFiltersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
