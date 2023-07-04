import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})


export class ContactoComponent {
  formularioContacto: FormGroup;
  enviadoIntentado: boolean = false; // Propiedad para controlar si se ha intentado enviar el formulario

  constructor(private http: HttpClient) {
    this.formularioContacto = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(145)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      telefono: new FormControl('', Validators.required),
      asunto: new FormControl('', Validators.required),
      mensaje: new FormControl('', Validators.required)
    });
  }

  enviarFormulario() {
    this.enviadoIntentado = true; // Se establece como verdadero cuando se hace clic en el botón enviar

    if (this.formularioContacto.invalid) {
      return; // Si el formulario es inválido, se detiene el proceso de envío y se muestran los mensajes de error
    }

    const url = environment.apiUrl + "/enviar-formulario/";

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
          Swal.fire({
            title: 'Éxito',
            text: '¡El formulario se ha enviado con éxito!\nEspere nuestra respuesta.',
            icon: 'success'
          });
          this.formularioContacto.reset();
          this.enviadoIntentado = false;
        },
        error => {
          console.error('Error al enviar el formulario', error);
          Swal.fire('Error', 'Ha ocurrido un error al enviar el formulario.', 'error');
          Swal.fire({
            title: 'Error',
            text: 'Ha ocurrido un error al enviar el formulario.\nComunícate directamente al teléfono (464) 64 73861 ext.: 128 y 120\no al correo coinpi@utsalamanca.edu.mx.',
            icon: 'error'
          });
        }
      );
  }

}


