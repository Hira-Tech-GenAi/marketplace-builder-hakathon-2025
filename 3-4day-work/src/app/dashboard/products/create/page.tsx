"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { UploadDropzone } from "@/lib/uploadthing";

import { SelectValue } from "@radix-ui/react-select";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function CreateProductRoute() {
  return (
    <>
      <form>
        <div className="flex items-center gap-4">
          <Button variant={"outline"} size={"icon"} asChild>
            {/*return to products */}
            <Link href={"/dashboard/products"}>
              <ChevronLeft className=" h-4 w-4" />
            </Link>
          </Button>
          <h1 className="text-xl font-semibold tracking-tight">New Product</h1>
        </div>

        {/*Card*/}
        <Card className="mt-5">
          <CardHeader>
            <CardTitle>Product Details</CardTitle>

            <CardDescription>
              In this form you can create a new product
            </CardDescription>

            <CardHeader>
              <CardContent>
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-3">
                    <Label>Product Name</Label>
                    <Input
                      type="text"
                      placeholder="Product Name"
                      className="w-full"
                    />
                  </div>

                  <div className="flex flex-col gap-3">
                    <Label>Product Description</Label>
                    <Textarea placeholder="Product Description"></Textarea>
                  </div>
                  <div className="flex flex-col gap-3">
                    <Label>Price</Label>
                    <Input type="number" placeholder="$99" />
                  </div>

                  <div className="flex flex-col gap-3">
                    <Label>Featured Product</Label>
                    <Switch />
                  </div>

                  <div className="flex flex-col gap-3">
                    <Label>Status</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Status" />
                      </SelectTrigger>

                      <SelectContent>
                        <SelectItem value="draft">Draft</SelectItem>
                        <SelectItem value="published">Publish</SelectItem>
                        <SelectItem value="archived">Archived</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex flex-col gap-3">
                    <Label> Images</Label>
                    //?api route for img upload(endpoint)
                    <UploadDropzone
                      endpoint="imageUploader"
                      onClientUploadComplete={(res) => {
                        alert("Upload Completed");
                      }}
                      onUploadError={() => {
                        alert("something went wrong");
                      }}
                    />
                  </div>
                </div>
              </CardContent>
            </CardHeader>
          </CardHeader>
        </Card>
      </form>
    </>
  );
}
