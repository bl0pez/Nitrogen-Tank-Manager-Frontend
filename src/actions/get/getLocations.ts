"use server";
import { Location } from "@/interfaces/location.interfaces";
import { getCookies } from "@/lib/cookies";

export async function getLocations(): Promise<Location[]> {
  const token = await getCookies("token");

  if (!token) {
    throw new Error("No se ha encontrado un token");
  }

  const resp = await fetch(`${process.env.BACKEND_URL}/location`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${JSON.parse(token)}`,
    },
  });

  if (!resp.ok) {
    throw new Error("Error al obtener las ubicaciones");
  }

  return resp.json();
}
