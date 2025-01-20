import { DashboardNavbar } from "@/components/dashboard/DashboardNavbar";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { CircleUser, MenuIcon } from "lucide-react";
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator,  } from "@radix-ui/react-dropdown-menu";
import { getKindeServerSession as fetchKindeSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";





export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const { getUser } = fetchKindeSession();

  const user = await getUser();
if( !user || user.email !== "hirashoaibisc@gmail.com") {
  return redirect("/")
}
  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <header className="sticky top-0 flex h-16 items-center justify-between border-b gap-4 bg-white">
        <nav className="hidden md:flex font-medium md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <DashboardNavbar />
        </nav>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              className="shrink-0 md:hidden"
              variant={"outline"}
              size={"icon"}
            >
              <MenuIcon className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="flex flex-col gap-6 text-lg font-medium mt-5">
              <DashboardNavbar />
            </nav>
          </SheetContent>
        </Sheet>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant={"secondary"}
              size={"icon"}
              className="rounded-full"
            >
              <CircleUser className="w-5 h-5" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            <DropdownMenuLabel className="bg-white border-b">
              My Account
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="bg-white border-b">
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>

      <main className="my-5">{children}</main>
    </div>
  );
}
function getKindeServerSession() {
  throw new Error("Function not implemented.");
}

