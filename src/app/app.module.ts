import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginModule } from './login/login.module';
import { LoginComponent } from './login/login.component';
import { MenuModule } from './menu/menu.module';
import { MenuComponent } from './menu/menu.component';
import { ContentComponent } from './content/content.component';
import { ContentModule } from './content/content.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SidenavModule } from './sidenav/sidenav.module';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    ContentComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    LoginModule,
    MenuModule,
    ContentModule,
    SidenavModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
