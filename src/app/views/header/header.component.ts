import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  switchModal:boolean;

  constructor() {
    this.switchModal = false;
  }

  ngOnInit() {
  }

  abrirRegistro(){
    if (this.switchModal == false){
      this.switchModal = true;
    } else {
      this.switchModal = false;
    }
  }

}
