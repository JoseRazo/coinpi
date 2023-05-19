import { Time } from "@angular/common";

export class Cronograma {
    id!: number;
    tipo_actividad!: string;
    otra_actividad!: string;
    dia!: number;
    fecha!: Date;
    hora_inicio!: Date;
    hora_fin!: Date;
    actividad!: string;
    curso?: Curso;
    empresa?: Empresa;
}

interface Curso {
    id?: number;
    nombre?: string;
    objetivo?: string;
    instructor?: Instructor;
}

interface Instructor {
    id?: number;
    nombre?: string;
    telefono?: string;
    correo?: string;
    fotografia?: string;
}

interface Empresa {
    id?: number;
    nombre?: string;
}