import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent {
  imagen?: File;
  file?: File;

  formularioRegistro: FormGroup;
  enviadoIntentado: boolean = false; // Propiedad para controlar si se ha intentado enviar el formulario



  constructor(private http: HttpClient) {
    this.formularioRegistro = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(145)]),
      apellido_paterno: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(145)]),
      apellido_materno: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(145)]),
      escuela_procedencia: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(145)]),
      foto: new FormControl([null]),
      referencia: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(145)]),
      comprobante_pago: new FormControl([null]),
    });
    this.loadScripts();
  }
  onImageChanged(event: any) {
    this.imagen = event.target.files[0]
  }
  onFileChanged(event: any) {
    this.file = event.target.files[0]
  }

  // constructor(private formBuilder:FormBuilder, private http: HttpClient) {
  //   this.formularioRegistro = this.formBuilder.group({
  //     nombre: ['', Validators.required, Validators.minLength(4), Validators.maxLength(145)],
  //     apellido_paterno: ['', Validators.required, Validators.minLength(4), Validators.maxLength(145)],
  //     apellido_materno: ['', Validators.required, Validators.minLength(4), Validators.maxLength(145)],
  //     escuela_procedencia: ['', Validators.required, Validators.minLength(4), Validators.maxLength(145)],
  //     foto: [null],
  //     referencia: ['', Validators.required, Validators.minLength(4), Validators.maxLength(145)],
  //   });
  // }

  enviarFormulario() {
    this.enviadoIntentado = true; // Se establece como verdadero cuando se hace clic en el botón enviar

    if (this.formularioRegistro.invalid) {
      return; // Si el formulario es inválido, se detiene el proceso de envío y se muestran los mensajes de error
    }

    const url = 'http://127.0.0.1:8001/api/registro/';
    // const url = 'https://api.utsalamanca.edu.mx/api/enviar-formulario/';
    const formData = new FormData();
    formData.append('nombre', this.formularioRegistro.get('nombre')?.value);
    formData.append('apellido_paterno', this.formularioRegistro.get('apellido_paterno')?.value);
    formData.append('apellido_materno', this.formularioRegistro.get('apellido_materno')?.value);
    formData.append('escuela_procedencia', this.formularioRegistro.get('escuela_procedencia')?.value);
    formData.append('foto', this.imagen!);
    formData.append('referencia', this.formularioRegistro.get('referencia')?.value);
    formData.append('comprobante_pago', this.file!);


    this.http.post(url, formData)
      .subscribe(
        response => {
          console.log('Formulario enviado con éxito');
          Swal.fire({
            title: 'Éxito',
            text: '¡El formulario se ha enviado con éxito!\nEspere nuestra respuesta.',
            icon: 'success'
          });
          this.formularioRegistro.reset();
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
          this.formularioRegistro.reset();
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