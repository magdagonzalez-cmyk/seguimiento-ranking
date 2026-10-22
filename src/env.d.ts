/// <reference types="astro/client" />

declare namespace App {
    interface Locals {
        usuario?: {
            rut: string;
            nombre: string;
            curso: string;
        };
    }
}