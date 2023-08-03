import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBloggerComponent } from './new-blogger.component';

describe('NewBloggerComponent', () => {
  let component: NewBloggerComponent;
  let fixture: ComponentFixture<NewBloggerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewBloggerComponent]
    });
    fixture = TestBed.createComponent(NewBloggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
