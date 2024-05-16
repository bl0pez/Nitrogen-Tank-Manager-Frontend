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
import { useFormStatus } from "@/hooks/useFormStatus";
import { createLocation } from "@/actions/form/createLocation.action";
import { GrTableAdd } from "react-icons/gr";

const formSchema = z.object({
  name: z.string(),
});

export type LocationFormValues = z.infer<typeof formSchema>;

export const CreateLocationForm = () => {
  const { isPending, setAlertMessage, startTransition } = useFormStatus();
  const form = useForm<LocationFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = async (values: LocationFormValues) => {
    startTransition(async () => {
      const resp = await createLocation(values);

      if (resp.error) {
        setAlertMessage({ message: resp.error, type: "error" });
        return;
      }

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
          <DialogTitle>Agregar nueva ubicación</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            className="flex flex-col gap-4"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            {/* location */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ubicación</FormLabel>
                  <FormControl>
                    <Input {...field} autoComplete="off" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button disabled={isPending} type="submit">
              Crear
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
