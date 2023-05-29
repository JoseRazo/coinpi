import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})


export class ContactoComponent {
  formularioContacto: FormGroup;

  constructor(private http: HttpClient) {
    this.formularioContacto = new FormGroup({
      nombre: new FormControl(''),
      email: new FormControl(''),
      telefono: new FormControl(''),
      asunto: new FormControl(''),
      mensaje: new FormControl('')
    });
  }

  enviarFormulario() {
    if (this.formularioContacto) {
      const url = 'http://127.0.0.1:8001/api/enviar-formulario/'; // Reemplaza con la URL correcta de tu API REST
      const formData = new FormData();
      formData.append('nombre', this.formularioContacto.get('nombre')?.value);
      formData.append('email', this.formularioContacto.get('email')?.value);
      formData.append('telefono', this.formularioContacto.get('telefono')?.value);
      formData.append('asunto', this.formularioContacto.get('asunto')?.value);
      formData.append('mensaje', this.formularioContacto.get('mensaje')?.value);
      
      this.http.post(url, formData)
      .subscribe(
        response => {
          console.log('Formulario enviado con éxito');
          // Puedes agregar una lógica adicional aquí, como mostrar un mensaje de éxito al usuario
        },
        error => {
          console.error('Error al enviar el formulario', error);
          // Puedes manejar el error aquí, como mostrar un mensaje de error al usuario
        }
      );
    }
  }
}


