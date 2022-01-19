import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalOverviewComponent } from './professional-overview.component';

describe('ProfessionalOverviewComponent', () => {
  let component: ProfessionalOverviewComponent;
  let fixture: ComponentFixture<ProfessionalOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
