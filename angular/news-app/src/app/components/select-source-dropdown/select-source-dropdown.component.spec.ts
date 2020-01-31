import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSourceDropdownComponent } from './select-source-dropdown.component';

describe('SelectSourceDropdownComponent', () => {
  let component: SelectSourceDropdownComponent;
  let fixture: ComponentFixture<SelectSourceDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectSourceDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectSourceDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
