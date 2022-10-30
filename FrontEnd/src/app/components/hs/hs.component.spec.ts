import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HsComponent } from './hs.component';

describe('HsComponent', () => {
  let component: HsComponent;
  let fixture: ComponentFixture<HsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
