import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BasicLayoutComponent } from './components/basic-layout/basic-layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { SelectSourceDropdownComponent } from './components/select-source-dropdown/select-source-dropdown.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NewsCatalogComponent } from './containers/news-catalog/news-catalog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BasicLayoutComponent,
    FooterComponent,
    SelectSourceDropdownComponent,
    ToolbarComponent,
    NewsCatalogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
