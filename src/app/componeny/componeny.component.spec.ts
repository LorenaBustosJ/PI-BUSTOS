import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenyComponent } from './componeny.component';

describe('ComponenyComponent', () => {
  let component: ComponenyComponent;
  let fixture: ComponentFixture<ComponenyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
