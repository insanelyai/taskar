import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Edit2Icon } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

export default function NotesDialogView({setIsEditing}: {setIsEditing: Dispatch<SetStateAction<boolean>>}) {
  return (
    <>
      <div className="flex flex-col gap-2 w-full">
        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-semibold text-pretty">
            Changing: Using Next.js for SEO Optimization & Refactoring Code
          </h2>
          <span className="text-muted-foreground text-sm">
            Created on July 31, 2024
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-pretty py-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla,
            nostrum doloremque laboriosam possimus impedit alias vel facilis
            iusto aspernatur iure eveniet quae. In harum laudantium velit omnis
            impedit et possimus!
          </p>
          <div>
            <Badge>Next.js</Badge>
          </div>
        </div>
        <div className="flex gap-2 items-center justify-end my-3">
          <Button className="flex gap-2 items-center" variant={'secondary'} onClick={() => setIsEditing((prev) => !prev)}>
            <Edit2Icon className="w-3.5" />
            Edit
          </Button>
        </div>
      </div>
    </>
  );
}
