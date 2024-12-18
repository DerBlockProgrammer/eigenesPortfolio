import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactLineComponent } from './contact-line.component';

describe('ContactLineComponent', () => {
  let component: ContactLineComponent;
  let fixture: ComponentFixture<ContactLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactLineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
