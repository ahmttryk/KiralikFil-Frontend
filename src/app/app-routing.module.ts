import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GirisComponent } from './component/giris/giris.component';
import { AnasayfaComponent } from './component/anasayfa/anasayfa.component';
import { KayitolComponent } from './component/kayitol/kayitol.component';

const routes: Routes = [
  {path:'',redirectTo:'giris-yap',pathMatch:'full'},
  {path:'giris-yap', component:GirisComponent},
  {path:'ana-sayfa', component:AnasayfaComponent},
  {path:'kayit-ol', component:KayitolComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
