import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { BasicLayoutComponent } from "./components/basic-layout/basic-layout.component";
import { FooterComponent } from "./components/footer/footer.component";
import { SelectSourceDropdownComponent } from "./components/select-source-dropdown/select-source-dropdown.component";
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { NewsCatalogComponent } from "./containers/news-catalog/news-catalog.component";
import { FilterFormComponent } from "./components/filter-form/filter-form.component";
import { NewsListComponent } from "./components/news-list/news-list.component";
import { NewsCardComponent } from "./components/news-list/news-card/news-card.component";
import { EditNewsComponent } from "./containers/edit-news/edit-news.component";
import { EditFormComponent } from "./components/edit-form/edit-form.component";
import { AddNewsComponent } from "./containers/add-news/add-news.component";
import { FilterPipe } from "./components/filter-form/filter.pipe";
import { NewCardsFactoryComponent } from "./components/news-list/new-cards-factory/new-cards-factory.component";
import { HttpService } from "./services/http.service";
import { ArticlesService } from "./services/articles.service";
import { SourcesService } from "./services/sources.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BasicLayoutComponent,
    FooterComponent,
    SelectSourceDropdownComponent,
    ToolbarComponent,
    NewsCatalogComponent,
    FilterFormComponent,
    NewsListComponent,
    NewsCardComponent,
    EditNewsComponent,
    EditFormComponent,
    AddNewsComponent,
    FilterPipe,
    NewCardsFactoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [HttpService, ArticlesService, SourcesService],
  bootstrap: [AppComponent],
  entryComponents: [NewsCardComponent]
})
export class AppModule {}
