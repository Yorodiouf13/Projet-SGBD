import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdTpComponent } from './td-tp.component';

describe('TdTpComponent', () => {
  let component: TdTpComponent;
  let fixture: ComponentFixture<TdTpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TdTpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TdTpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
