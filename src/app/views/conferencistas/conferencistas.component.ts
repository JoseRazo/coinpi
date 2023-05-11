import { Component, OnInit } from '@angular/core';
import { InstructoresService } from 'src/app/services/instructores/instructores.service';
import { Instructor } from 'src/app/services/instructores/instructor.interfaces';
import { Router } from '@angular/router';
import { Observable } from "rxjs";

@Component({
  selector: 'app-conferencistas',
  templateUrl: './conferencistas.component.html',
  styleUrls: ['./conferencistas.component.css']
})

export class ConferencistasComponent implements OnInit {

  instructores: Instructor[];

  constructor(private instructorService: InstructoresService) {
    this.instructores = [];
  }

  ngOnInit() {
    this.instructorService.getInstructores().subscribe(
      (data: Instructor[]) => {
        console.log(data);
        this.instructores = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

}
