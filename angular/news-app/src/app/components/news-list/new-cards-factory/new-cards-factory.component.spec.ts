import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCardsFactoryComponent } from './new-cards-factory.component';

describe('NewCardsFactoryComponent', () => {
  let component: NewCardsFactoryComponent;
  let fixture: ComponentFixture<NewCardsFactoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCardsFactoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCardsFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
