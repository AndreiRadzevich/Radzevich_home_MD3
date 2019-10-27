/* tslint:disable:no-unused-variable */

import { TestBed, async, fakeAsync, tick, ComponentFixture } from '@angular/core/testing';
import { UserComponent } from './user.component';
import { UserService } from "./user.service";
import { DataService } from "../shared/data.service";
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('Component: User', () => {

  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let el: DebugElement;
  let userService: UserService;
  let dataService: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent],
      providers: [ UserService, DataService ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.debugElement.componentInstance;
    userService = fixture.debugElement.injector.get(UserService);
    userService = TestBed.get(UserService);
    dataService = fixture.debugElement.injector.get(DataService);
    dataService = TestBed.get(DataService);
    el = fixture.debugElement;
  });

  it('should create the app', () => {
      expect(component).toBeTruthy();
  });

  it('should use the user name from the service', () => {
    fixture.detectChanges();
    expect(userService.user).toEqual(component.user);
  });

  it('should display the user name if user is logged in', () => {
    component.isLoggedIn = true;
    fixture.detectChanges();
    expect(el.query(By.css('p')).nativeElement.textContent).toBe('User is: John');
  });

  it('shouldn\'t display the user name if user is not logged in', () => {
    component.isLoggedIn = false;
    fixture.detectChanges();
    const content = fixture.nativeElement.querySelector('p').textContent;
    expect(content).not.toContain( 'User is: John');
  });

  it('shouldn\'t fetch data successfully if not called asynchronously', () => {
    component.ngOnInit();
    expect(component.data).toBeUndefined();
  });

  it('should fetch data successfully if called asynchronously', async(() => {
    spyOn(dataService, 'getDetails').and.returnValue(
      Promise.resolve('Data'));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.data).toBe('Data');
    });
  }));

  it('should fetch data successfully if called asynchronously', fakeAsync(() => {
    dataService.getDetails().then((val: any) => component.data = val);
    tick(2000);
    expect(component.data).toBe('Data');
  }));

  afterEach(() => {
    TestBed.resetTestingModule();
  });
});
