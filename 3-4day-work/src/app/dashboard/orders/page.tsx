import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function OrdersPage() {
  return (
    <Card>
      <CardHeader className="px-7">
        <CardTitle>Orders</CardTitle>
        <CardDescription>Recent Orders From Your Store! </CardDescription>
      </CardHeader>
      <CardContent>
        {/* Table */}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          {/* Table Body */}
          <TableBody>
            <TableRow>
              {/* Table Cell */}
              <TableCell>
                <p className="font-medium">Ali</p>
                <p className="hidden md:flex text-sm text-muted-foreground">test@test.com</p>
              </TableCell>

              <TableCell>
               Sales
              </TableCell>

              <TableCell>
                Successful
              </TableCell>

              <TableCell>
                2025-01-19
              </TableCell>

              <TableCell className="text-right">
                $250.00  
                </TableCell>

            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
