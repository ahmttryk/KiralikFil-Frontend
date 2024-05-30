import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GirisComponent } from './component/giris/giris.component';
import { KayitolComponent } from './component/kayitol/kayitol.component';
import { AnasayfaComponent } from './component/anasayfa/anasayfa.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import { RealEstateListComponent } from './real-estate-list/real-estate-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RealEstateService } from './real-estate.service';
import { ApiService } from './api.service';

@NgModule({
  declarations: [
    AppComponent,
    GirisComponent,
    KayitolComponent,
    AnasayfaComponent,
    RealEstateListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FormsModule,
    HttpClientModule

  ],
  providers: [RealEstateService,ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
