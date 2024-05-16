import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function HomePage() {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <Card className="shadow-md">
        <CardHeader>
          <p className="text-2xl font-semibold text-center">
            Termo de Nitrógeno
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col items-center justify-between rounded-lg border p-3 shadow-sm">
            <div className="flex flex-row items-center justify-between w-full">
              <p className="text-sm font-medium">ID:</p>
              <p className="truncate text-sm max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">
                asdasdadadaqe12
              </p>
            </div>
            <div className="flex flex-row items-center justify-between w-full">
              <p className="text-sm font-medium">Código:</p>
              <p className="truncate text-sm max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">
                123123123
              </p>
            </div>
            <div className="flex flex-row items-center justify-between w-full">
            <p className="text-sm font-medium">Two Factor Authentication:</p>
            <Badge variant="destructive">Disabled</Badge>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between rounded-lg border p-3 shadow-sm">
            <div className="flex flex-row items-center justify-between w-full">
              <p className="text-sm font-medium">ID:</p>
              <p className="truncate text-sm max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">
                asdasdadadaqe12
              </p>
            </div>
            <div className="flex flex-row items-center justify-between w-full">
              <p className="text-sm font-medium">Código:</p>
              <p className="truncate text-sm max-w-[180px] font-mono p-1 bg-slate-100 rounded-md">
                123123123
              </p>
            </div>
            <div className="flex flex-row items-center justify-between w-full">
            <p className="text-sm font-medium">Two Factor Authentication:</p>
            <Badge variant="destructive">Disabled</Badge>
            </div>
          </div>
  
        </CardContent>
      </Card>

      <div className="bg-white p-4 shadow">
        <h2 className="text-2xl font-bold">Ubicaciones</h2>
        <p className="text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
          lacus sed nunc dictum tincidunt. Sed nec metus nec eros ultricies
          ultricies. Nullam nec lacus sed nunc dictum tincidunt. Sed nec metus
          nec eros ultricies ultricies.
        </p>
      </div>
    </div>
  );
}
