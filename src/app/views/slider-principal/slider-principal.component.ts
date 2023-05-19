import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/services/eventos/evento.interfaces';
import { EventosService } from 'src/app/services/eventos/eventos.service';


@Component({
  selector: 'app-slider-principal',
  templateUrl: './slider-principal.component.html',
  styleUrls: ['./slider-principal.component.css']
})
export class SliderPrincipalComponent implements OnInit{

  eventos: Evento[]

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
