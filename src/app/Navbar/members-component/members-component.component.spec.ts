import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersComponentComponent } from './members-component.component';

describe('MembersComponentComponent', () => {
  let component: MembersComponentComponent;
  let fixture: ComponentFixture<MembersComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembersComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MembersComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
