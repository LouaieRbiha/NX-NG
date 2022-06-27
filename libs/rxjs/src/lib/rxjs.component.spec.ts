import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibsRxjsComponent } from './rxjs.component';

describe('LibsRxjsComponent', () => {
  let component: LibsRxjsComponent;
  let fixture: ComponentFixture<LibsRxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LibsRxjsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LibsRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
