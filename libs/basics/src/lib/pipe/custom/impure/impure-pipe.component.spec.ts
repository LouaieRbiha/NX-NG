import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpurePipeComponent } from './impure-pipe.component';

describe('ImpurePipeComponent', () => {
  let component: ImpurePipeComponent;
  let fixture: ComponentFixture<ImpurePipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImpurePipeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ImpurePipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
