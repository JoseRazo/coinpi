import { Time } from "@angular/common";

export class Curso {
    id!: number;
    instructor!: Instructor;
    nombre!: string;
    objetivo!: string;
}

interface Instructor {
    id?: number;
    nombre?: string;
}