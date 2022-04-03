import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnippetEditButtonComponent } from './snippet-edit-button.component';

describe('SnippetEditButtonComponent', () => {
  let component: SnippetEditButtonComponent;
  let fixture: ComponentFixture<SnippetEditButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SnippetEditButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnippetEditButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
