"use server";
import { LocationFormValues } from "@/components/form/CreateLocationForm";
import { isAdmin } from "@/lib/auth";
import { getCookies } from "@/lib/cookies";
import { revalidatePath } from "next/cache";

export async function createLocation(values: LocationFormValues) {
    const token = await getCookies("token");
    const user = await isAdmin();

    if (!user || !token) {
        return { error: "No tienes permisos para realizar esta acción" };
    }

    const resp = await fetch(`${process.env.BACKEND_URL}/location`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(token)}`,
      },
      body: JSON.stringify(values),
    });

    if (!resp.ok) {
        return { error: "Error al crear la ubicación" };
    }

    revalidatePath("/", 'page');
    return { message: "Ubicación creada correctamente" };
}
