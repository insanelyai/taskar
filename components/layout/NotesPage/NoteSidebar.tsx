"use client";

import NotesDialogAdd from "@/components/reuseable/notes/NotesDialogAdd";
import NotesDisplayCard from "@/components/reuseable/notes/NotesDisplayCard";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { PlusIcon, SearchCodeIcon, SearchIcon } from "lucide-react";
import { useState } from "react";

export default function NoteSidebar() {
  const [dialogState, setDialogState] = useState(false);

  return (
    <>
      <div className="w-full p-6 overflow-hidden">
        <div className="flex items-center justify-between">
          <span className="text-2xl font-semibold">Notes</span>

          <Input
            placeholder="search..."
            className="max-w-96 overflow-clip"
          ></Input>

          <Dialog
            onOpenChange={(prev) => {
              setDialogState(!prev);
              setDialogState(false);
            }}
          >
            <DialogTrigger asChild>
              <Button
                size={"icon"}
                variant={"secondary"}
                className="use-transition"
              >
                <PlusIcon className="w-5 h-5" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogTitle>Add Note</DialogTitle>
              <DialogDescription></DialogDescription>
              <NotesDialogAdd setDialogState={setDialogState} />

              <DialogClose asChild>
                <Button
                  type="button"
                  variant={"ghost"}
                  className=" font-semibold hover:bg-destructive hover:text-destructive-foreground use-transition"
                >
                  cancel
                </Button>
              </DialogClose>
            </DialogContent>
          </Dialog>
        </div>

        <div className="max-h-[calc(100vh-13.3rem)] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 my-5 px-2 overflow-y-scroll">
          <NotesDisplayCard />
          <NotesDisplayCard />
          <NotesDisplayCard />
          <NotesDisplayCard />
        </div>
      </div>
    </>
  );
}
