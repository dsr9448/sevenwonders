import { Component, OnInit ,inject, PLATFORM_ID} from '@angular/core';
import { RouterModule, RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { filter } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';
import { CartService } from './services/cartservices';
import { CartComponent } from './shared/cart/cart.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterModule,HeaderComponent,FooterComponent,CartComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'sevenwonders';
  private platformId = inject(PLATFORM_ID);
  constructor(private router: Router, private cartService: CartService) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      window.scrollTo(0, 0);
    });
  }
}
}
