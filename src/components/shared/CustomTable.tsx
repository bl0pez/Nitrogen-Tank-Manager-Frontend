import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Props {
  children: React.ReactNode;
  columns: string[];
  totalPages: number;
}

export const CustomTable = ({ children, columns, totalPages }: Props) => {
  return (
    <Table className="bg-background">
      <TableHeader>
        <TableRow>
          {columns.map((column, index) => (
            <TableHead key={index} className="text-foreground">{column}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {totalPages > 0 ? (
          children
        ) : (
          <TableRow>
            <TableCell colSpan={columns.length} className="text-center">
              No hay datos
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
