import { CreateLocationForm } from "@/components/form/CreateLocationForm";

export default function LocationsLayout({ table }: { table: React.ReactNode }) {
  return (
    <div className="container">
      <div className="bg-primary flex flex-wrap items-center justify-between px-2 py-3">
        <h1 className="text-xl text-white">Ubicaciones</h1>
        <CreateLocationForm />
      </div>
      {table}
    </div>
  );
}
