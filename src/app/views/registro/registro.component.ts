import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';
import Swal from 'sweetalert2';
import { CursosService } from 'src/app/services/cursos/cursos.service';
import { Curso } from 'src/app/services/cursos/cursos.interfaces';
import { EmpresasService } from 'src/app/services/empresas/empresas.service';
import { Empresa } from 'src/app/services/empresas/empresa.interfaces';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent implements OnInit {
  cursos: Curso[];
  empresas: Empresa[];

  imagen?: File;
  fileComprobantePago?: File;
  fileFormatoInscripcion?: File;

  formularioRegistro: FormGroup;
  enviadoIntentado: boolean = false;
  pantallaCarga: boolean = false; // Propiedad para controlar si se ha intentado enviar el formulario
  diaVisitaDisabled: boolean = true;

  constructor(
    private http: HttpClient,
    private cursosService: CursosService,
    private empresasService: EmpresasService
  ) {
    this.cursos = [];
    this.empresas = [];

    this.formularioRegistro = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(145)]),
      apellido_paterno: new FormControl('', [Validators.required, Validators.maxLength(145)]),
      apellido_materno: new FormControl('', [Validators.required, Validators.maxLength(145)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      tipo_participante: new FormControl('', [Validators.required]),
      universidad_empresa: new FormControl('', [Validators.required]),
      matricula: new FormControl('', []),
      numero_empleado: new FormControl('', []),
      // foto: new FormControl('', [Validators.required]),
      taller: new FormControl('', [Validators.required]),
      dia_taller: new FormControl('', [Validators.required]),
      // visita_industrial: new FormControl('', [Validators.required]),
      // dia_visita: new FormControl('', [Validators.required]),
      referencia: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(145)]),
      comprobante_pago: new FormControl('', [Validators.required]),
      formato_inscripcion: new FormControl('', [Validators.required]),
    });
    this.loadScripts();
  }

  ngOnInit() {
    // this.formularioRegistro.get('dia_taller')?.valueChanges.subscribe((selectedValue) => {
    //   const diaVisitaControl = this.formularioRegistro.get('dia_visita');

    //   if (selectedValue === 'jueves') {
    //     diaVisitaControl?.setValue('viernes');
    //   } else if (selectedValue === 'viernes') {
    //     diaVisitaControl?.setValue('jueves');
    //   } else {
    //     diaVisitaControl?.setValue('');
    //   }

    // });

    this.cursosService.getCursos().subscribe(
      (data: Curso[]) => {
        this.cursos = data;
      },
      (error: any) => {
        console.log(error);
      }
    );

    this.empresasService.getEmpresas().subscribe(
      (data: Empresa[]) => {
        this.empresas = data;
        console.log(data);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  tipoParticipanteChanged() {
    const tipoParticipante = this.formularioRegistro.get('tipo_participante')?.value;

    if (tipoParticipante === 'estudiante_utyp') {
      this.formularioRegistro.get('matricula')?.setValidators([Validators.required]);
    } else {
      this.formularioRegistro.get('matricula')?.clearValidators();
    }

    if (tipoParticipante === 'docente_directivo_utyp') {
      this.formularioRegistro.get('numero_empleado')?.setValidators([Validators.required]);
    } else {
      this.formularioRegistro.get('numero_empleado')?.clearValidators();
    }

    this.formularioRegistro.get('matricula')?.updateValueAndValidity();
    this.formularioRegistro.get('numero_empleado')?.updateValueAndValidity();
  }

  onImageChanged(event: any) {
    this.imagen = event.target.files[0]
  }
  onFileComprobantePagoChanged(event: any) {
    this.fileComprobantePago = event.target.files[0]
  }

  onFileFormatoInscripcionChanged(event: any) {
    this.fileFormatoInscripcion = event.target.files[0]
  }

  enviarFormulario() {
    this.enviadoIntentado = true;
    this.pantallaCarga = true;  // Se establece como verdadero cuando se hace clic en el botón enviar

    if (this.formularioRegistro.invalid) {
      this.pantallaCarga = false;
      return; // Si el formulario es inválido, se detiene el proceso de envío y se muestran los mensajes de error
    }

    const url = environment.apiUrl + "/registro/";

    const formData = new FormData();
    formData.append('nombre', this.formularioRegistro.get('nombre')?.value);
    formData.append('apellido_paterno', this.formularioRegistro.get('apellido_paterno')?.value);
    formData.append('apellido_materno', this.formularioRegistro.get('apellido_materno')?.value);
    formData.append('email', this.formularioRegistro.get('email')?.value);
    formData.append('tipo_participante', this.formularioRegistro.get('tipo_participante')?.value);
    formData.append('universidad_empresa', this.formularioRegistro.get('universidad_empresa')?.value);
    formData.append('matricula', this.formularioRegistro.get('matricula')?.value);
    formData.append('numero_empleado', this.formularioRegistro.get('numero_empleado')?.value);
    // formData.append('foto', this.imagen!);
    formData.append('taller', this.formularioRegistro.get('taller')?.value);
    formData.append('dia_taller', this.formularioRegistro.get('dia_taller')?.value);
    // formData.append('visita_industrial', this.formularioRegistro.get('visita_industrial')?.value);
    // formData.append('dia_visita', this.formularioRegistro.get('dia_visita')?.value);
    formData.append('referencia', this.formularioRegistro.get('referencia')?.value);
    formData.append('comprobante_pago', this.fileComprobantePago!);
    formData.append('formato_inscripcion', this.fileFormatoInscripcion!);

    this.http.post(url, formData)
      .subscribe(
        response => {
          console.log('Formulario enviado con éxito');
          Swal.fire({
            title: 'Éxito',
            text: '¡El formulario se ha enviado con éxito!\nEspere nuestra respuesta.',
            icon: 'success'
          }).then((result) => {
            location.reload();
          });
          this.pantallaCarga = false;
          this.formularioRegistro.reset();
          this.enviadoIntentado = false;
        },
        error => {
          console.error('Error al enviar el formulario', error);
          console.log(error.error.mensaje)
          Swal.fire('Error', 'Ha ocurrido un error al enviar el formulario.', 'error');
          if (error.error.mensaje) {
            Swal.fire({
              title: 'Error',
              text: error.error.mensaje,
              icon: 'error'
            });
          } else {
            Swal.fire({
              title: 'Error',
              text: 'Ha ocurrido un error al enviar el formulario.\nComunícate directamente al teléfono (464) 64 73861 ext.: 128 y 120\no al correo coinpi@utsalamanca.edu.mx.',
              icon: 'error'
            });
          }
          this.pantallaCarga = false;
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