import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarshComponent } from './tarsh.component';

describe('TarshComponent', () => {
  let component: TarshComponent;
  let fixture: ComponentFixture<TarshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
