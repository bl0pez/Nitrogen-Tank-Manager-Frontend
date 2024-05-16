import { CreateThermo } from "@/components/form/CreateThermo";

export default function NitrogenTankLayout({
  table,
}: {
  table: React.ReactNode;
}) {
  return (
    <div className="container">
      <div className="bg-primary flex flex-wrap items-center justify-between px-2 py-3">
        <h1 className="text-xl text-white">
          Tanque de Nitrógeno
        </h1>
        <CreateThermo />
      </div>
      {table}
    </div>
  );
}
