<<<<<<< HEAD
# COINPI
<img src="http://www.utsalamanca.edu.mx/assets/img/pagina-principal/logouts.png" style="width: 220px;" alt="Universidad Tecnológica de Salamanca">

## Pre-requisitos

- Instalar [Docker.](https://www.docker.com/get-started)
- Instalar [Docker Compose.](https://docs.docker.com/compose/install/)

## Instalación

- Clonar repositorio `git clone https://github.com/JoseRazo/coinpi.git`
- Crear APP angular en caso de que aun no este creada.
```sh
docker build --tag coinpi_web .
docker run -it -v $(pwd):/app -p 4200:4200 -p 49153:49153 --name ng coinpi_web sh
ng new coinpi --skip-git
```

- Crear imagen docker **`docker compose build`**
- Crear contenedor **`docker compose up -d`**
- Abrir navegador y entrar a URL [127.0.0.1:4200](http://127.0.0.1:4200)

## Subir cambios del proyecto a servidor de producción

- Entrar al contenedor `docker exec -i -t coinpi-web-1 /bin/sh`
- Compilar el codigo **`ng build --prod --build-optimizer --base-href=./`**
- Subir archivos de la carpeta /dist/COINPI/ al servidor de producción

##
<p style="color:yellow">Si te gusta nuestro proyecto por favor deja una estrella ☆<p>
=======
# uts
Universidad Tecnológica de Salamanca
>>>>>>> 507e05d8de9dff5df9649ee1e7d63b3d2cdbf9b8
