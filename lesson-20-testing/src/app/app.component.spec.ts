/* tslint:disable:no-unused-variable */

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('App: CompleteGuideFinalWebpack', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let el: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    });
  });

  fixture = TestBed.createComponent(AppComponent);
  component = fixture.componentInstance;
  el = fixture.debugElement;

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    expect(component.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    expect(el.query(By.css('h1')).nativeElement.textContent).toBe('app works!');
  }));
});
