import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-kayitol',
  templateUrl: './kayitol.component.html',
  styleUrls: ['./kayitol.component.css']
})
export class KayitolComponent implements OnInit {
  email : string = '';
  password : string = '';

  constructor(private auth : AuthService) { }

  ngOnInit(): void {
  }
  kayitol() {
    if(this.email == '') {
      alert('Lütfen e-posta adresinizi giriniz.');
    return;
  }
  if(this.password == '') {
    alert('Lütfen şifrenizi giriniz.');
  return;
  }

  this.auth.kayitol(this.email,this.password);
  this.email = '';
  this.password = '';
  }
}
