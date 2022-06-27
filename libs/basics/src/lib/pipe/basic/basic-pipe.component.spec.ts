import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicPipeComponent } from './basic-pipe.component';

describe('BasicPipeComponent', () => {
  let component: BasicPipeComponent;
  let fixture: ComponentFixture<BasicPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasicPipeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BasicPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
