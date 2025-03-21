import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { MenuBarComponent } from './app/components/menu-bar/menu-bar.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
