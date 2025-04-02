import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withEnabledBlockingInitialNavigation } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http';
bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    provideRouter(
      routes,
      withEnabledBlockingInitialNavigation()
    ),
    provideHttpClient()
  ]
}).catch(err => console.error(err));
