import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodevoteComponent } from './codevote.component';

describe('CodevoteComponent', () => {
  let component: CodevoteComponent;
  let fixture: ComponentFixture<CodevoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CodevoteComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodevoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
