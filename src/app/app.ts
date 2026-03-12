import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { trigger, transition, query, style, animate } from '@angular/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            inset: '0',
            width: '100%'
          })
        ], { optional: true }),
        query(':enter', [style({ opacity: 0, transform: 'translateY(20px)' })], { optional: true }),
        query(':leave', [animate('220ms ease', style({ opacity: 0, transform: 'translateY(-12px)' }))], { optional: true }),
        query(':enter', [animate('320ms 70ms ease', style({ opacity: 1, transform: 'translateY(0)' }))], { optional: true })
      ])
    ])
  ]
})
export class App {
  readonly themeService = inject(ThemeService);

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  getRouteAnimationData(outlet: RouterOutlet): string {
    return (outlet?.activatedRouteData?.['animation'] as string) || 'Default';
  }
}
