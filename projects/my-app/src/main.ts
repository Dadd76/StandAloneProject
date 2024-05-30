import { bootstrapApplication } from '@angular/platform-browser';
//import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { ApplicationRef, EnvironmentProviders, Provider } from '@angular/core';
import { routes } from './app/routes';
import { PreloadAllModules, provideRouter, withDebugTracing, withPreloading } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

//injection de dépendance global
const providers: Array<Provider | EnvironmentProviders> = [
  provideRouter(routes,withDebugTracing(),withPreloading(PreloadAllModules)),
  provideHttpClient()
];

const loadApplication = (application : ApplicationRef) => {console.info(application)};

bootstrapApplication(AppComponent,{providers}).then(loadApplication) // appConfig
  .catch((err) => console.error(err));

 // bootstrapApplication(AppComponent,appConfig);
