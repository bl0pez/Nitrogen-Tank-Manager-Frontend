import { CustomTable } from "@/components/shared/CustomTable";
import { TableCell, TableRow } from "@/components/ui/table";
import { NitrogenTank, NitrogenTankStatus } from "@/interfaces/nitrogenTank.interfaces";

const getData = async (): Promise<NitrogenTank[]> => {
  const resp = await fetch(`${process.env.BACKEND_URL}/tank`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache",
  });

  if (!resp.ok) {
    throw new Error("Error al obtener la data :C");
  }

  return resp.json();
};

const columns = ["Código", "Ubicación", "Status", ""];

interface Props {
  params: {};
  searchParams: {};
}

export default async function NitrogenFlaskTable(props: Props) {
  const tanks = await getData();

  return (
    <CustomTable columns={columns} totalPages={2}>
      {tanks.map((tank) => (
        <TableRow key={tank.id}>
          <TableCell>{tank.code}</TableCell>
          <TableCell>{tank.location}</TableCell>
          <TableCell>
            {
              NitrogenTankStatus[
                tank.currentStatus as unknown as keyof typeof NitrogenTankStatus
              ]
            }
          </TableCell>
        </TableRow>
      ))}
    </CustomTable>
  );
}
