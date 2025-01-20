import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DollarSign, PartyPopper, ShoppingBag, User2 } from "lucide-react";
import React from "react";

const DashBoard = () => {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        {/* Total Revenue Card Start*/}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle>Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">$ 100.00</p>
            <p className="text-xs text-muted-foreground">
              Based on 100 Charges
            </p>
          </CardContent>
        </Card>
        {/* Total Revenue Card End*/}

        {/* Total Sales Card Start*/}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle>Total Sales</CardTitle>
            <ShoppingBag className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">+50</p>
            <p className="text-xs text-muted-foreground">
              Total Sales on "LoveYourFeet" Store
            </p>
          </CardContent>
        </Card>
        {/*Total Sales Card End */}

        {/*Products Sold Card Start */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle>Total Product</CardTitle>
            <PartyPopper className="h-4 w-4 text-indigo-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">+50</p>
            <p className="text-xs text-muted-foreground">
              Total Products Created
            </p>
          </CardContent>
        </Card>

        {/*Products Sold Card End */}

        {/*Total User Card Start */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle>Total User</CardTitle>
            <User2 className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">+50</p>
            <p className="text-xs text-muted-foreground">Total User Sign Up</p>
          </CardContent>
        </Card>
      </div>
      {/*Total User Card End */}

      {/* Recent Transactions Card Start*/}
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-2 xl:grid-cols-3 mt-10">
        <Card className=" xl:col-span-2">
          <CardTitle>Transactions</CardTitle>
          <CardDescription>Recent Transactions From My Store</CardDescription>
        </Card>
        {/* Recent Transactions Card End*/}

        {/* Recent Sales Card Start */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
            <CardContent className="flex flex-col gap-8">
              {/*Div One*/}
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarFallback className="hidden sm:flex h-9 w-9">
                    HK
                  </AvatarFallback>
                </Avatar>

                <div className="grid gap-1">
                  <p className="font-medium text-sm">Hira Khalid</p>
                  <p className="text-muted-foreground text-sm">
                    hirakhalidgd@gmail.com
                  </p>
                </div>
                <p>+$1,99.00</p>
              </div>

              {/*Div Two*/}
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarFallback className="hidden sm:flex h-9 w-9">
                    HK
                  </AvatarFallback>
                </Avatar>

                <div className="grid gap-1">
                  <p className="font-medium text-sm">Hira Khalid</p>
                  <p className="text-muted-foreground text-sm">
                    hirakhalidgd@gmail.com
                  </p>
                </div>
                <p>+$1,99.00</p>
              </div>

              {/*Div three */}
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarFallback className="hidden sm:flex h-9 w-9">
                    HK
                  </AvatarFallback>
                </Avatar>

                <div className="grid gap-1">
                  <p className="font-medium text-sm">Hira Khalid</p>
                  <p className="text-muted-foreground text-sm">
                    hirakhalidgd@gmail.com
                  </p>
                </div>
                <p>+$1,99.00</p>
              </div>
              {/*Div four */}
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarFallback className="hidden sm:flex h-9 w-9">
                    HK
                  </AvatarFallback>
                </Avatar>

                <div className="grid gap-1">
                  <p className="font-medium text-sm">Hira Khalid</p>
                  <p className="text-muted-foreground text-sm">
                    hirakhalidgd@gmail.com
                  </p>
                </div>
                <p>+$1,99.00</p>
              </div>
            </CardContent>
          </CardHeader>
        </Card>
        {/* Recent Sales Card End */}
      </div>
    </>
  );
};

export default DashBoard;
