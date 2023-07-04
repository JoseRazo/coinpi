import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/services/eventos/evento.interfaces';
import { EventosService } from 'src/app/services/eventos/eventos.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {

  eventos: Evento[];

  constructor(private eventoService: EventosService) {
    this.eventos = [];
  }

  ngOnInit() {
    this.eventoService.getEventos().subscribe(
      (data: Evento[]) => {
        console.log(data);
        this.eventos = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  truncateText(text: string, length: number): string {
    if (text.length <= length) {
      return text;
    } else {
      return text.substring(0, length) + '...';
    }
  }

}
