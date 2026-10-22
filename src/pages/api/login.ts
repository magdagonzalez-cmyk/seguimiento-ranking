import type { APIRoute } from "astro";

export const POST: APIRoute = async ({
    request,
    redirect,
    session
}) => {

    const datos = await request.formData();

    const rut = datos.get("rut")?.toString().trim();
    const password = datos.get("password")?.toString();

    // ==========================================
    // USUARIO DE PRUEBA
    // ==========================================

    const RUT_CORRECTO = "12.345.678-9";
    const PASSWORD_CORRECTA = "123456";

    // ==========================================
    // COMPROBAR CREDENCIALES
    // ==========================================

    if (
        rut !== RUT_CORRECTO ||
        password !== PASSWORD_CORRECTA
    ) {
        return new Response(
            "RUT o contraseña incorrectos.",
            {
                status: 401,
                headers: {
                    "Content-Type":
                        "text/plain; charset=utf-8"
                }
            }
        );
    }

    // ==========================================
    // GUARDAR USUARIO EN LA SESIÓN
    // ==========================================

    await session?.set("usuario", {
        rut: rut,
        nombre: "Juan Pérez",
        curso: "3° Medio TP"
    });

    // ==========================================
    // IR A LA PÁGINA PRINCIPAL
    // ==========================================

    return redirect("/rankingtp", 303);
};