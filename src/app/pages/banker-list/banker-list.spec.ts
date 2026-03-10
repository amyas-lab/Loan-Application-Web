import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankerList } from './banker-list';

describe('BankerList', () => {
  let component: BankerList;
  let fixture: ComponentFixture<BankerList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankerList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankerList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
