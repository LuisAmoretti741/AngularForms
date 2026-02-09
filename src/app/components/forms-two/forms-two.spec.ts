import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsTwo } from './forms-two';

describe('FormsTwo', () => {
  let component: FormsTwo;
  let fixture: ComponentFixture<FormsTwo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsTwo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsTwo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
