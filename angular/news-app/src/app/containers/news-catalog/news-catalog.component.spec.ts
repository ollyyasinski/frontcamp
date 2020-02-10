import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA, PipeTransform, Pipe } from "@angular/core";
import { of } from "rxjs";

import { ArticlesService } from "src/app/services/articles.service";
import { SourcesService } from "src/app/services/sources.service";
import { HttpService } from "src/app/services/http.service";
import { NewsCatalogComponent } from "./news-catalog.component";

@Pipe({
  name: "filter"
})
export class FilterMockPipe implements PipeTransform {
  transform(term: any): any {
    return term;
  }
}

describe("NewsCatalogComponent", () => {
  let component: NewsCatalogComponent;
  let fixture: ComponentFixture<NewsCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewsCatalogComponent, FilterMockPipe],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {
          provide: ArticlesService,
          useValue: {
            updateArticles$: of({}),
            getArticles: () => of([]),
            addArticles: () => {}
          }
        },
        {
          provide: SourcesService,
          useValue: {
            addSources: () => {},
            selecteSource: () => {}
          }
        },
        {
          provide: HttpService,
          useValue: {
            getSources: () => of([]),
            getTopNewsBySource: () => {}
          }
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsCatalogComponent);
    component = fixture.componentInstance;
    component.allArticles$ = of([]);

    fixture.detectChanges();
  });
});
