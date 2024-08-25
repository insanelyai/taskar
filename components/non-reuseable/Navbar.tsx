import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { LogInIcon, MenuIcon } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "../mode_trigger";

const routes = [
  { label: "home", path: "/" },
  { label: "notes", path: "/notes" },
  { label: "tasks", path: "/tasks" },
  { label: "calendar", path: "/calendar" },
];

export default function Navbar() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto py-4 flex items-center justify-center">
        <div className="w-full h-14 border rounded-xl shadow-lg drop-shadow-sm mx-1 xl:mx-0 p-2">
          <NavigationMenu className="max-w-screen-xl flex items-center justify-between">
            <div className="basis-1/4">
              <NavigationMenuList className="hidden lg:flex">
                {routes.map(({ label, path }) => (
                  <NavigationMenuItem key={label}>
                    <Link href={path} legacyBehavior passHref>
                      <NavigationMenuLink className="m-1 p-2.5 text-base rounded-md hover:text-primary hover:font-semibold use-transition">
                        {label}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
              <NavigationMenuList className="inline-block lg:hidden">
                <NavigationMenuItem>
                  <Button
                    size={"icon"}
                    variant={"ghost"}
                    className=""
                  >
                    <MenuIcon />
                  </Button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </div>

            <div className="basis-1/2">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href={"/"} legacyBehavior passHref>
                    <NavigationMenuLink className="font-semibold text-xl">
                      taskar
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </div>

            <div className="basis-1/4 flex justify-end">
              <NavigationMenuList className="flex items-center gap-2">
                <ModeToggle />
                <NavigationMenuItem>
                  <Link href={"/register"} legacyBehavior passHref>
                    <NavigationMenuLink className="font-semibold text-lg">
                      <Button
                        variant={"secondary"}
                        className=""
                      >
                        <span className="hidden lg:inline-block">register</span>
                        <span className="lg:hidden">
                          <LogInIcon />
                        </span>
                      </Button>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </div>
          </NavigationMenu>
        </div>
      </div>
    </>
  );
}
