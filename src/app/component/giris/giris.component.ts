import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-giris',
  templateUrl: './giris.component.html',
  styleUrls: ['./giris.component.css']
})
export class GirisComponent implements OnInit {

  email : string = '';
  password : string = '';


  constructor(private auth : AuthService) { }

  ngOnInit(): void {
  }
girisyap() {
  if(this.email == '') {
    alert('Lütfen e-posta adresinizi giriniz.');
  return;
}
if(this.password == '') {
  alert('Lütfen şifrenizi giriniz.');
return;
}

this.auth.girisyap(this.email,this.password);
this.email = '';
this.password = '';
}
}
