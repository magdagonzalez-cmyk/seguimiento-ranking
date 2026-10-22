import { defineMiddleware } from "astro:middleware";

const paginasProtegidas = [
    "/rankingtp",
    "/ranking",
    "/asignaturas",
    "/nosotros",
    "/mi-informacion"
];

export const onRequest = defineMiddleware(
    async (context, next) => {

        const ruta = context.url.pathname;

        // Si la ruta no necesita protección,
        // dejamos que continúe normalmente.
        if (!paginasProtegidas.includes(ruta)) {
            return next();
        }

        // Comprobar si existe una sesión
        const sesionActiva =
            await context.session?.get("usuario");

        // Si no existe sesión, volver al login
        if (!sesionActiva) {
            return context.redirect("/");
        }

        // Si existe sesión, permitir el acceso
        return next();
    }
);