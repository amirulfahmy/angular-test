
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgChartsModule } from 'ng2-charts';
import { ChartGraphComponent } from './chart-graph.component';

describe('ChartGraphComponent', () => {
  let component: ChartGraphComponent;
  let fixture: ComponentFixture<ChartGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ NgChartsModule ],
      declarations: [ ChartGraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
