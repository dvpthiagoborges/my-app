import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponentComponent } from './profile-component.component';

describe('PerfilComponentComponent', () => {
  let component: ProfileComponentComponent;
  let fixture: ComponentFixture<ProfileComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
