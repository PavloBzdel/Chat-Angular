import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentThirdComponent } from './content-third.component';

describe('ContentThirdComponent', () => {
  let component: ContentThirdComponent;
  let fixture: ComponentFixture<ContentThirdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentThirdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
