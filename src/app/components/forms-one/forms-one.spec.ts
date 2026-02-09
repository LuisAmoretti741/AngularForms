import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsOne } from './forms-one';

describe('FormsOne', () => {
  let component: FormsOne;
  let fixture: ComponentFixture<FormsOne>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsOne]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsOne);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
