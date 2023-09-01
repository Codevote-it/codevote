import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnippetPercentageComponent } from './snippet-percentage.component';

describe('SnippetPercentageComponent', () => {
  let component: SnippetPercentageComponent;
  let fixture: ComponentFixture<SnippetPercentageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SnippetPercentageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnippetPercentageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
