import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCovidChartComponent } from './my-covid-chart.component';

describe('MyCovidChartComponent', () => {
  let component: MyCovidChartComponent;
  let fixture: ComponentFixture<MyCovidChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCovidChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCovidChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
