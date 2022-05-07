import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCodevoteComponent } from './edit-codevote.component';

describe('EditCodevoteComponent', () => {
  let component: EditCodevoteComponent;
  let fixture: ComponentFixture<EditCodevoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditCodevoteComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCodevoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
