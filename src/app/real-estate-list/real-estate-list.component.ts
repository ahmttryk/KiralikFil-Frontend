import { Component, OnInit } from '@angular/core';
import { RealEstateService } from '../real-estate.service';

@Component({
  selector: 'app-real-estate-list',
  templateUrl: './real-estate-list.component.html',
  styleUrls: ['./real-estate-list.component.css']
})
export class RealEstateListComponent implements OnInit {
  realEstates!: any[];

  constructor(private realEstateService:RealEstateService ) { }

  ngOnInit(): void {
    this.realEstateService.getRealEstates().subscribe(data => {
      this.realEstates = data;
    });
  }
}
