import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeDetailTypeComponent } from './poke-detail-type.component';

describe('PokeDetailTypeComponent', () => {
  let component: PokeDetailTypeComponent;
  let fixture: ComponentFixture<PokeDetailTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeDetailTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeDetailTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
