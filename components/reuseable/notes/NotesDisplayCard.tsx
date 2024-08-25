"use client";

import { useState } from "react";
import { Badge } from "../../ui/badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "../../ui/dialog";
import NotesDialogView from "./NotesDialogView";
import NotesDialogEdit from "./NotesDialogEdit";

{/*
  
  NotesSchema: {
  title: string,
  date: string, // created || updated
  content: string,
  category: string,
  }

  @param isEditing: boolean 
  setIsEditing: function to change the state of editing the note (only affect the content of the note)
  
  */}

export default function NotesDisplayCard() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <Card className="w-full my-1">
        <CardHeader>
          <Dialog onOpenChange={() => {
            setIsEditing((prev) =>!prev);
            setIsEditing(false);
          }}>
            <DialogTrigger className="text-left hover:underline use-transition">
              <CardTitle className="overflow-hidden text-lg text-pretty font-semibold text-ellipsis">
                Changing: Using Next.js for SEO Optimization & Refactoring Code
              </CardTitle>
            </DialogTrigger>
            <DialogContent>
              <DialogTitle>
                {isEditing ? "Edit Note" : ""}
              </DialogTitle>
              {isEditing ? (
                <NotesDialogEdit setIsEditing={setIsEditing} />
              ) : (
                <NotesDialogView setIsEditing={setIsEditing} />
              )}
            </DialogContent>
          </Dialog>
          <CardDescription>Created on July 31, 2024</CardDescription>
        </CardHeader>
        <CardFooter>
          <Badge>Next.js</Badge>
        </CardFooter>
      </Card>
    </>
  );
}
