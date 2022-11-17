import { NgOptimizedImage } from '@angular/common';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CircleComponent } from './components/circle/circle.component';

import { HomeCardComponent } from './home-card.component';

describe('HomeCardComponent', () => {
  let component: HomeCardComponent;
  let fixture: ComponentFixture<HomeCardComponent>;
  let router: Router;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeCardComponent, CircleComponent],
      imports: [MatIconModule, NgOptimizedImage],
      providers: [
        {
          provide: Router,
          useValue: jasmine.createSpyObj('router', ['navigate']),
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
    el = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display image', () => {
    component.imagePath = 'image';
    component.imageUrl = 'other';
    fixture.detectChanges();
    const image = el.queryAll(By.css('.card__image'))[0];
    expect(image.nativeNode.src).toEqual('http://localhost:9876/imageother');
  });

  it('should display all card elements', () => {
    component.id = 1;
    component.popularity = 10;
    component.voteAvg = 10;
    component.voteCount = 10;
    component.released = '2022-10-10';

    const votesAvg = el.queryAll(By.css('.card__voteAvg'));
    const title = el.queryAll(By.css('.card__title'));
    const subtitle = el.queryAll(By.css('.card__subtitle'));
    const votes = el.queryAll(By.css('.card__votes'));
    const populartiy = el.queryAll(By.css('.card__popularity'));

    expect(votesAvg.length).toBe(1, 'failed votesAvg');
    expect(title.length).toBe(1, 'failed title');
    expect(subtitle.length).toBe(1, 'failed subtitle');
    expect(votes.length).toBe(1, 'failed votes');
    expect(populartiy.length).toBe(1, 'failed popularity');
  });

  it('should trigger click to navigate', () => {
    component.handleClick();
    fixture.detectChanges();
    expect(router.navigate).toHaveBeenCalledTimes(1);
  });
});
