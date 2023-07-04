import { Component, OnInit } from '@angular/core';
import { CronogramasService } from 'src/app/services/cronogramas/cronogramas.service';
import { Cronograma } from 'src/app/services/cronogramas/cronogramas.interfaces';
import { Router } from '@angular/router';
import { Observable } from "rxjs";

@Component({
  selector: 'app-cronograma',
  templateUrl: './cronograma.component.html',
  styleUrls: ['./cronograma.component.css']
})
export class CronogramaComponent implements OnInit {

  cronogramas: Cronograma[];

  constructor(private cronogramasService: CronogramasService){
    this.cronogramas = [];
  } 

  ngOnInit(){
    this.cronogramasService.getCronogramas().subscribe(
      (data: Cronograma[])=> {
        console.log(data);
        this.cronogramas=data;
      },
      (error:any) => {
        console.log(error);
      }
    );
  }

}
