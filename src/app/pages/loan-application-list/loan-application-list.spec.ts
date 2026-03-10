import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanApplicationList } from './loan-application-list';

describe('LoanApplicationList', () => {
  let component: LoanApplicationList;
  let fixture: ComponentFixture<LoanApplicationList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoanApplicationList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanApplicationList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
