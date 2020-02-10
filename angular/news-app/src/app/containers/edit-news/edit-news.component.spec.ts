import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA } from "@angular/core";

import { EditNewsComponent } from "./edit-news.component";

describe("EditNewsComponent", () => {
  let component: EditNewsComponent;
  let fixture: ComponentFixture<EditNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditNewsComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
