import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnippetBarComponent } from './snippet-bar.component';

describe('SnippetBarComponent', () => {
  let component: SnippetBarComponent;
  let fixture: ComponentFixture<SnippetBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SnippetBarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnippetBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
