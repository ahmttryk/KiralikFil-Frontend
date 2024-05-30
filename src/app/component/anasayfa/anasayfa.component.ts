import { Component, OnInit } from '@angular/core';
import { RealEstateService } from 'src/app/real-estate.service';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-anasayfa',
  templateUrl: './anasayfa.component.html',
  styleUrls: ['./anasayfa.component.css']
})
export class AnasayfaComponent implements OnInit {
 realEstateData!:any[];
  email : string = '';
  constructor(private auth: AuthService, private realEstateService: RealEstateService) { }

  ngOnInit(): void {
    this.getRealEstateData();
  }

  getRealEstateData(): void {
    this.realEstateService.getRealEstates()
      .subscribe(data => {
        this.realEstateData = data;
      });
  }
  cikisyap() {
    this.auth.cikisyap();

  }
}
