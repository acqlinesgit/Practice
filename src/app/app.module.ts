import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'; // we also need angular router for Nebular to function properly
import { NbThemeModule, NbSidebarModule, NbToastrModule } from '@nebular/theme';
import { ShareModule } from './share/share.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    ShareModule,
    NbToastrModule.forRoot(),
    NbThemeModule.forRoot({ name: 'dark' }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
