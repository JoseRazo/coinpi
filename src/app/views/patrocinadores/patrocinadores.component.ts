import { Component, OnInit } from '@angular/core';
import { PatrocinadoresService } from 'src/app/services/patrocinadores/patrocinadores.service';
import { Patrocinador } from 'src/app/services/patrocinadores/patrocinador.interfaces';
import { Router } from '@angular/router';
import { Observable } from "rxjs"

@Component({
  selector: 'app-patrocinadores',
  templateUrl: './patrocinadores.component.html',
  styleUrls: ['./patrocinadores.component.css']
})

export class PatrocinadoresComponent implements OnInit {

  patrocinadores: Patrocinador[];

  constructor(private patrocinadorService: PatrocinadoresService) {
    this.patrocinadores = [];
  }

  ngOnInit() {
    this.patrocinadorService.getPatrocinadores().subscribe(
      (data: Patrocinador[]) => {
        console.log(data);
        this.patrocinadores = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

}
