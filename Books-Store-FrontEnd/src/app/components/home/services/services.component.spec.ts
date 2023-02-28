import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedBooksComponent } from './services.component';

describe('FeaturedBooksComponent', () => {
  let component: FeaturedBooksComponent;
  let fixture: ComponentFixture<FeaturedBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
