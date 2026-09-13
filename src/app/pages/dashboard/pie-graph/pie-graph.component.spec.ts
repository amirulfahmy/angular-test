
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgChartsModule } from 'ng2-charts';

import { PieGraphComponent } from './pie-graph.component';

describe('PieGraphComponent', () => {
  let component: PieGraphComponent;
  let fixture: ComponentFixture<PieGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ NgChartsModule ],
      declarations: [ PieGraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PieGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
