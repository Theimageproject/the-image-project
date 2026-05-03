import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedviewComponent } from './detailedview.component';

describe('DetailedviewComponent', () => {
  let component: DetailedviewComponent;
  let fixture: ComponentFixture<DetailedviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailedviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailedviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
