"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Location } from "@/interfaces/location.interfaces";
import { getLocations } from "@/actions/get/getLocations";
import { useFormStatus } from "@/hooks/useFormStatus";
import { createThermo } from "@/actions/form/createThermo";
import { GrTableAdd } from "react-icons/gr";
import { NitrogenTankStatus } from "@/interfaces/nitrogenTank.interfaces";

const formSchema = z.object({
  currentStatus: z.enum(Object.keys(NitrogenTankStatus) as [string, ...string[]]),
  code: z.string().min(3, "El código debe tener al menos 3 caracteres"),
  locationId: z.string().cuid("La ubicación no es válida"),
});

export type ThermoFormValues = z.infer<typeof formSchema>;

export const CreateThermo = () => {
  const { isPending, setAlertMessage, startTransition } = useFormStatus();
  const [locations, setLocations] = useState<Location[]>();
  const form = useForm<ThermoFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      code: "",
      currentStatus: "",
      locationId: "",
    }
  });

  useEffect(() => {
    getLocations().then((locations) => setLocations(locations));
  }, []);

  const onSubmit = async (values: ThermoFormValues) => {
    startTransition(async () => {
      const resp = await createThermo(values);

      if (resp.error) {
        setAlertMessage({ message: resp.error, type: "error" });
        return;
      }

      form.reset();
      setAlertMessage({ message: resp.message, type: "success" });

    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon" title="Crear termo de nitrógeno">
          <GrTableAdd size={18} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Crear termo de nitrógeno</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form className="flex flex-col gap-4" onSubmit={form.handleSubmit(onSubmit)}>
            {/* Código */}
            <FormField
              control={form.control}
              name="code"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Código:</FormLabel>
                  <FormControl>
                    <Input {...field} autoComplete="off" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Ubicación */}
            <FormField
              control={form.control}
              name="locationId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ubicación:</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>  
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona una opción" />
                      </SelectTrigger>
                      <SelectContent>
                        {locations?.map((location) => (
                          <SelectItem key={location.id} value={location.id}>
                            {location.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                      <FormMessage />
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Estado */}
            <FormField
              control={form.control}
              name="currentStatus"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ubicación:</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value} name={field.name}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona una opción" />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(NitrogenTankStatus).map(([key, value]) => (
                          <SelectItem key={key} value={key}>
                            {value}
                          </SelectItem>
                        ))}
                      </SelectContent>
                      <FormMessage />
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />

            <Button type="submit" disabled={isPending}>
              Crear
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
