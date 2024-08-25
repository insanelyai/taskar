"use client";

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
import { Button } from "@/components/ui/button";

import { z } from "zod";
import { set, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { LogInIcon, SaveIcon, User2Icon } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { NotesDialogCategory } from "./NotesDialogCategory";
import { Dispatch, SetStateAction } from "react";

const formSchema = z.object({
  title: z.string().min(1),
  content: z.string(),
  category: z.string().min(1),
});

export default function NotesDialogAdd({
  setDialogState,
}: {
  setDialogState: Dispatch<SetStateAction<boolean>>;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { title: "", content: "", category: "" },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("onSubmit", values);
  };

  const handleCategoryEvent = (category: string) => {
    form.setValue("category", category);
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          <div className="space-y-3">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="title"
                      className="font-semibold text-lg"
                      {...field}
                    ></Input>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="start writing here..."
                      className="min-h-[10rem] max-h-[30rem] resize-none overflow-y-auto"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <NotesDialogCategory handleCategoryEvent={handleCategoryEvent} />
          </div>
          <div className="mt-5 flex items-center justify-end gap-2">
            
            <Button
              type="submit"
              className="w-full flex items-center gap-1.5 use-transition"
            >
              {/* <SaveIcon strokeWidth={1.5} className="w-3.5" /> */}
              save
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
}
