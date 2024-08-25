"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { LogInIcon, User2Icon } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  username: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(8),
});

export default function RegisterPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { username: "", email: "", password: "" },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await axios.post("/api/auth/register", values);
      console.log("Registeration Successful", response.data);
    } catch (error) {
      console.error("Unexpected API Error", error);
    }
  };

  return (
    <>
      <div className="min-w-screen h-[calc(100vh-5.5rem)] flex items-center justify-center">
        <Card className="max-w-96 min-w-80">
          <CardHeader>
            <CardTitle>Register</CardTitle>
            <CardDescription>
              happy to see you taking the first step
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="">
                <div className="space-y-2">
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                          <Input placeholder="shadcn"  className="flex items-center justify-end" {...field}>
                          
                          </Input>
                        </FormControl>
                        <FormDescription>
                          This is your public display name.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="insanelyai@taskar.com"
                            {...field}
                          />
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
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input placeholder="*******" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <Button type="submit" className="w-full my-5  use-transition" variant={'secondary'}>
                  register
                </Button>
              </form>
            </Form>
          </CardContent>
          <div className="relative mx-auto">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t"></span>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-card px-2 text-muted-foreground">
                already have an account?
              </span>
            </div>
          </div>
          <CardFooter className="my-3">
            <Link href={"/login"} className="w-full">
              <Button
                variant="secondary"
                className="w-full flex items-center justify-center gap-2 use-transition"
              >
                <LogInIcon className="w-4 h-4" />
                login
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
