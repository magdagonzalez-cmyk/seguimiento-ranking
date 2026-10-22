import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ session, redirect }) => {

    // Eliminar la sesión actual
    await session?.destroy();

    // Volver al inicio de sesión
    return redirect("/", 303);
};