import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemeFinderComponent } from './scheme-finder.component';

describe('SchemeFinderComponent', () => {
  let component: SchemeFinderComponent;
  let fixture: ComponentFixture<SchemeFinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchemeFinderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemeFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
