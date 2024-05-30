import { ApplicationConfig } from '@angular/platform-browser';
import { Routes, provideRouter } from '@angular/router';

const routes: Routes = [
  // Buraya uygulamanızın yönlendirmelerini ekleyin
];

export const environment = {
  production: true
};

export const appConfig: ApplicationConfig = { providers: [provideRouter(routes), provideClientHydration(), provideHttpClient(withFetch())] };

function provideClientHydration(): import("@angular/core").Provider | import("@angular/core").ImportedNgModuleProviders {
  throw new Error("Function not implemented.");
}

function provideHttpClient(arg0: any): import("@angular/core").Provider | import("@angular/core").ImportedNgModuleProviders {
  throw new Error("Function not implemented.");
}

function withFetch(): any {
  throw new Error("Function not implemented.");
}
