export default function NitrogenTankHistoryLayout({ table }: { table: React.ReactNode }) {
  return (
    <div className="container">
      <div className="bg-primary flex flex-wrap items-center justify-between px-2 py-3">
        <h1 className="text-xl text-white">
          Historial tanque de nitrógeno
        </h1>
      </div>
      {table}
    </div>
  );
}
