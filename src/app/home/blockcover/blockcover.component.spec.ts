import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockcoverComponent } from './blockcover.component';

describe('BlockcoverComponent', () => {
  let component: BlockcoverComponent;
  let fixture: ComponentFixture<BlockcoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockcoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockcoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
