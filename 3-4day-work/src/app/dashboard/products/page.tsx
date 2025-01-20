import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel } from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DropdownMenuSeparator, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { MoreHorizontal, PlusCircle, UserIcon } from "lucide-react";
import Link from "next/link";

export default function ProductsPage() {
  return (
    <>
      <div className="flex items-center justify-end ">
        {/*Add product btn */}
        <Button asChild className="flex items-center gap-x-2">
          <Link href={"/dashboard/products/create"}>
            {" "}
            <PlusCircle className="w-4 h-4" />
            <span>Add Product</span>
          </Link>
        </Button>
      </div>
      {/* Card */}
      <Card className="mt-5">
        <CardHeader>
          <CardTitle>Products</CardTitle>
          <CardDescription>
            Manage your products and view their sales performance
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Table>
            {/* Table Header */}
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Image</TableHead>

                <TableHead>Name</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-end">Actions</TableHead>
              </TableRow>
            </TableHeader>

            {/** Table Body */}
            <TableBody>
              <TableRow>
                <TableCell>
                  <UserIcon className="w-16 h-16" />
                </TableCell>

                <TableCell>Comfort Feet</TableCell>
                <TableCell>Active</TableCell>
                <TableCell>$ 100.00</TableCell>
                <TableCell>2025-01-19</TableCell>
                <TableCell className="text-end">

                  {/* Dropdown Menu */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size={"icon"} variant={"ghost"}>
                        <MoreHorizontal className="w-4 h-4"/>
                      </Button>

                    </DropdownMenuTrigger>

                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>

                      {/* Dropdown Menu separator */}
                      <DropdownMenuSeparator/>

                      <DropdownMenuItem>
                        Item
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        Delete
                      </DropdownMenuItem>

                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
}
