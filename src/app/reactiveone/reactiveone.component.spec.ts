import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveoneComponent } from './reactiveone.component';

describe('ReactiveoneComponent', () => {
  let component: ReactiveoneComponent;
  let fixture: ComponentFixture<ReactiveoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactiveoneComponent]
    });
    fixture = TestBed.createComponent(ReactiveoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
