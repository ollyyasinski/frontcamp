import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA, Injector } from "@angular/core";

import { NewsCardComponent } from "./news-card.component";
import { ArticlesService } from "src/app/services/articles.service";
import { DeleteWarningService } from "../../delete-warning/delete-warning.service";

describe("NewsCardComponent", () => {
  let component: NewsCardComponent;
  let fixture: ComponentFixture<NewsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewsCardComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {
          provide: ArticlesService,
          useValue: {
            selectArticle: () => {},
            deleteArticle: () => {}
          }
        },
        {
          provide: DeleteWarningService,
          useValue: {
            showAsElement: () => {}
          }
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
