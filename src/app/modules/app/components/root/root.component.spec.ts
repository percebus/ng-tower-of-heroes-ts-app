import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RootComponent } from './root.component';
import { HeroesComponent } from '../heroes/heroes.component';

describe('RootComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [RootComponent, HeroesComponent],
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(RootComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Tour of Heroes'`, () => {
    const fixture = TestBed.createComponent(RootComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Tour of Heroes');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(RootComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Tour of Heroes app is running!'
    );
  });
});
