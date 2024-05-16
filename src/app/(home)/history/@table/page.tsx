import { CustomTable } from "@/components/shared/CustomTable";
import { TableCell, TableRow } from "@/components/ui/table";
import { NitrogenTankHistory, NitrogenTankStatus } from "@/interfaces/nitrogenTank.interfaces";

const getData = async (): Promise<NitrogenTankHistory[]> => {
  const resp = await fetch(`${process.env.BACKEND_URL}/tank/history`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache",
  });

  if (!resp.ok) {
    throw new Error("Error al obtener el historial de tanques de nitrógeno");
  }

  return resp.json();
};

const columns = ["Tanque nitrógeno", "Ubicación", "Estado", "Fecha"];

interface Props {
  params: {};
  searchParams: {};
}

export default async function NitrogenTankHistoryTable({ params, searchParams }: Props) {
  const history = await getData();

  return (
    <CustomTable columns={columns} totalPages={2}>
      {history.map((h) => (
        <TableRow key={h.id}>
          <TableCell>{h.tank}</TableCell>
          <TableCell>{h.location}</TableCell>
          <TableCell>
            {NitrogenTankStatus[h.status as unknown as keyof typeof NitrogenTankStatus]}
          </TableCell>
          <TableCell>
            {new Date(h.eventTimestamp).toLocaleDateString()}
          </TableCell>
        </TableRow>
      ))}
    </CustomTable>
  );
}
