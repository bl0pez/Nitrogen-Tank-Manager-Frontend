import { Location } from "@/interfaces/location.interfaces";
import { CustomTable } from "@/components/shared/CustomTable";
import { TableCell, TableRow } from "@/components/ui/table";

const getData = async (): Promise<Location[]> => {
    const resp = await fetch(`${process.env.BACKEND_URL}/location`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
    });
  
    if (!resp.ok) {
      throw new Error("Error al obtener las ubicaciones");
    }
  
    return resp.json();
};

const columns = [
    "id",
    "Ubicación",
]

interface Props {
    params: {},
    searchParams: {},
}

export default async function LocationTable({params, searchParams}: Props) {

  const locations = await getData();

  return (
    <CustomTable columns={columns} totalPages={2}>
      {
        locations.map((location) => (
          <TableRow key={location.id}>
            <TableCell>{location.id}</TableCell>
            <TableCell>{location.name}</TableCell>
          </TableRow>
        ))
      }
    </CustomTable> 
  );
}