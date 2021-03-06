import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { NewsCatalogComponent } from "./containers/news-catalog/news-catalog.component";
import { EditNewsComponent } from "./containers/edit-news/edit-news.component";
import { AddNewsComponent } from "./containers/add-news/add-news.component";

const routes: Routes = [
  { path: "news", component: NewsCatalogComponent },
  { path: "edit", component: EditNewsComponent },
  { path: "add", component: AddNewsComponent },
  { path: "", redirectTo: "/news", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
