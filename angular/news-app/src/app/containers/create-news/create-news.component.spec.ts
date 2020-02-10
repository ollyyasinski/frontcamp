import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA } from "@angular/core";

import { CreateNewsComponent } from "./create-news.component";

describe("CreateNewsComponent", () => {
  let component: CreateNewsComponent;
  let fixture: ComponentFixture<CreateNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateNewsComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
