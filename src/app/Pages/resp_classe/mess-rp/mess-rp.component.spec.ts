import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessRPComponent } from './mess-rp.component';

describe('MessRPComponent', () => {
  let component: MessRPComponent;
  let fixture: ComponentFixture<MessRPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessRPComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MessRPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
