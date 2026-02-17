import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchApi } from './fetch-api';

describe('FetchApi', () => {
  let component: FetchApi;
  let fixture: ComponentFixture<FetchApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FetchApi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FetchApi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
