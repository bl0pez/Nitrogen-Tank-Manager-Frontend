import * as React from "react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { LoginForm } from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>
          Iniciar sesión
        </CardTitle>
      </CardHeader>
      <CardContent>
        <LoginForm />
      </CardContent>
    </Card>
  );
}