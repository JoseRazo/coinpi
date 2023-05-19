import { Component, OnInit } from '@angular/core';
import { HotelesService } from 'src/app/services/hoteles/hoteles.service';
import { Hotel } from 'src/app/services/hoteles/hotel.interfaces';
import { Router } from '@angular/router'; 
import { Observable } from "rxjs";

@Component({
  selector: 'app-hoteles',
  templateUrl: './hoteles.component.html',
  styleUrls: ['./hoteles.component.css']
})

export class HotelesComponent implements OnInit {

  hoteles: Hotel[];

  constructor(private hotelService: HotelesService) {
    this.hoteles = [];
  }

  ngOnInit(){
    this.hotelService.getHoteles().subscribe(
      (data: Hotel[]) => {
        console.log(data);
        this.hoteles = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }  
  
}
