import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagerListComponent } from './messager-list.component';

describe('MessagerListComponent', () => {
  let component: MessagerListComponent;
  let fixture: ComponentFixture<MessagerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
