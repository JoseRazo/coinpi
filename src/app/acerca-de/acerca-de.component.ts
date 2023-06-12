import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/services/eventos/evento.interfaces';
import { EventosService } from 'src/app/services/eventos/eventos.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  eventos: Evento[];

  constructor(private eventoService: EventosService) {
    this.eventos = [];
    this.loadScripts();
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
  loadScripts() {
    const dynamicScripts = [
      "assets/js/main.js",
    ];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement("script");
      node.src = dynamicScripts[i];
      node.type = "text/javascript";
      node.async = false;
      node.charset = "utf-8";
      document.getElementsByTagName("head")[0].appendChild(node);
    }
  }


}
