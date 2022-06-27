import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicStructuralComponent } from './basic-structural.component';

describe('BasicStructuralComponent', () => {
  let component: BasicStructuralComponent;
  let fixture: ComponentFixture<BasicStructuralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasicStructuralComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BasicStructuralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
