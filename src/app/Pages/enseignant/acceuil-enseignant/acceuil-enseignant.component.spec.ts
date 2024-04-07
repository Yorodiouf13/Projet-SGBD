import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceuilEnseignantComponent } from './acceuil-enseignant.component';

describe('AcceuilEnseignantComponent', () => {
  let component: AcceuilEnseignantComponent;
  let fixture: ComponentFixture<AcceuilEnseignantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcceuilEnseignantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcceuilEnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
