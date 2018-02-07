import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmadoOfertasComponent } from './armado-ofertas.component';

describe('ArmadoOfertasComponent', () => {
  let component: ArmadoOfertasComponent;
  let fixture: ComponentFixture<ArmadoOfertasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArmadoOfertasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmadoOfertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
