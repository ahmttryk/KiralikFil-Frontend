import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth: AngularFireAuth, private router: Router) { }

  //giriş yapma kısmı

  girisyap(email:string, password:string,) {
    this.fireauth.signInWithEmailAndPassword(email,password).then( () => {
      localStorage.setItem('token','true');
      this.router.navigate(['ana-sayfa']);
    }, err => {
      alert(err.message)
      this.router.navigate(['/giris-yap']);
    })
  }

  //kayıt olma kısmı

  kayitol(email:string,password:string) {
this.fireauth.createUserWithEmailAndPassword(email,password).then( () => {
alert('Kayıt olma başarılı!')
  this.router.navigate(['/giris-yap']);
}, err=> {
  alert(err.message)
  this.router.navigate(['/kayit-ol']);
})
  }

  // çıkış yapma kısmı

  cikisyap() {
    this.fireauth.signOut().then( () => {
localStorage.removeItem('token');
this.router.navigate(['/giris-yap']);
    }, err =>{
alert(err.message);
    })
  }
}
