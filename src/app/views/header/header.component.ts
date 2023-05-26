import { Component, OnInit } from '@angular/core';
import { HeadersService } from 'src/app/services/headers/headers.service';
import { Header } from 'src/app/services/headers/header.interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  headers: Header[];

  constructor(private headerService: HeadersService) {
    this.headers = [];
  }

  ngOnInit() {
    this.headerService.getHeaders().subscribe(
      (data: Header[]) => {
        console.log(data);
        this.headers = data;
      },
      (error: any) =>{
        console.log(error);
      }
    );
  }

}
