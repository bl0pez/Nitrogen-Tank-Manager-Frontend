"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IoMdLogIn } from "react-icons/io";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useFormStatus } from "@/hooks/useFormStatus";
import { loginAction } from "@/actions/auth/login.action";
import { useUser } from "@/context/UserContext";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, {
    message: "La contraseña debe tener al menos 6 caracteres",
  }),
});

export type LoginFormValues = z.infer<typeof formSchema>;

export const LoginForm = () => {

  const { setUser } = useUser();
  const  { isPending, setAlertMessage, startTransition} = useFormStatus();
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values:LoginFormValues) => {
    startTransition(async() => {
        const user = await loginAction(values);
        if (!user) {
          setAlertMessage({
            message: "Credenciales incorrectas",
            type: "error",
          });
          return;
        }
        setUser(user);   
    });
  } 

  return <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              Correo electrónico:
            </FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              Contraseña:
            </FormLabel>
            <FormControl>
              <Input {...field} type="password" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <Button type="submit" className="w-full flex gap-1 dark:text-white">
        Ingresar
        <span>
          <IoMdLogIn className="text-xl" />
        </span> 
      </Button>

    </form>
  </Form>;
};
