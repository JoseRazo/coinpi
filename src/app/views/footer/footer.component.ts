import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/services/eventos/evento.interfaces';
import { EventosService } from 'src/app/services/eventos/eventos.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {

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

}
