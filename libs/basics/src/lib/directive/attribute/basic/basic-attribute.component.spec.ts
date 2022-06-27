import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicAttributeComponent } from './basic-attribute.component';

describe('BasicAttributeComponent', () => {
  let component: BasicAttributeComponent;
  let fixture: ComponentFixture<BasicAttributeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasicAttributeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BasicAttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
