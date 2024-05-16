"use server";
import { ThermoFormValues } from "@/components/form/CreateThermo";
import { isAdmin } from "@/lib/auth";
import { getCookies } from "@/lib/cookies";
import { revalidatePath } from "next/cache";

export async function createThermo(values: ThermoFormValues) {
    const token = await getCookies("token");
    const user = await isAdmin();

    if (!user || !token) {
        return { error: "No tienes permisos para realizar esta acción" };
    }

    const resp = await fetch(`${process.env.BACKEND_URL}/tank`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(token)}`,
      },
      body: JSON.stringify(values),
    });

    if (!resp.ok) {
      console.log(JSON.stringify(await resp.json()));
        return { error: "Error al crear el termo" };
    }

    revalidatePath("/thermo-nitrogen");
    return { message: "Termo creado correctamente" };
}
