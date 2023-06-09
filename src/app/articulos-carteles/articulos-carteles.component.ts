import { Component } from '@angular/core';

@Component({
  selector: 'app-articulos-carteles',
  templateUrl: './articulos-carteles.component.html',
  styleUrls: ['./articulos-carteles.component.css']
})
export class ArticulosCartelesComponent {

  constructor() {
    this.loadScripts();
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
