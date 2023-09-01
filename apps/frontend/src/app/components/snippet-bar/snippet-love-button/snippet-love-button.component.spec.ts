import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnippetLoveButtonComponent } from './snippet-love-button.component';

describe('SnippetLoveButtonComponent', () => {
  let component: SnippetLoveButtonComponent;
  let fixture: ComponentFixture<SnippetLoveButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SnippetLoveButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnippetLoveButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
