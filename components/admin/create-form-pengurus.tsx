"use client";

import React, { useActionState, useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SavePengurus } from "@/lib/action";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronRight } from "lucide-react";
import clsx from "clsx";
import { formatSektor } from "@/lib/utils";

const CreateFormPengurus = () => {
  const [sektorList, setSektorList] = useState<string[]>([]);
  const [selectedSektor, setSelectedSektor] = useState<string>("");
  const [categoryList, setCategoryList] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [openSektor, setOpenSektor] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);

  useEffect(() => {
    const fetchEnums = async () => {
      const sektorRes = await fetch("/api/enum/sektor");
      const sektorData = await sektorRes.json();
      setSektorList(sektorData);

      const categoryRes = await fetch("/api/enum/category");
      const categoryData = await categoryRes.json();
      setCategoryList(categoryData);
    };

    fetchEnums();
  }, []);

  const [state, formAction, isPending] = useActionState(
    SavePengurus.bind(null),
    null,
  );

  return (
    <form action={formAction}>
      <div className="flex flex-col gap-3">
        {/* Nama */}
        <div className="flex flex-col gap-1">
          <Label>Name</Label>
          <Input name="name" placeholder="Stephen" />
          <span className="text-red-500">{state?.error.name}</span>
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-1">
          <Label>Phone</Label>
          <Input name="position" placeholder="Ketua" />
          <span className="text-red-500">{state?.error.position}</span>
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-1">
          <Label>Category</Label>
          <DropdownMenu onOpenChange={setOpenCategory}>
            <DropdownMenuTrigger asChild>
              <Button variant={"outline"} className="flex justify-between">
                <span
                  className={clsx("font-normal", {
                    "text-gray-500": !selectedCategory,
                  })}
                >
                  {selectedCategory || "Select Sektor"}
                </span>
                <span
                  className={`transition-transform duration-200 ${
                    openCategory ? "rotate-90" : "rotate-0"
                  }`}
                >
                  <ChevronRight className="h-4 w-4" />
                </span>
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
              {categoryList.map((item, index) => (
                <DropdownMenuItem
                  key={index}
                  onClick={() => setSelectedCategory(item)}
                >
                  {item}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <input name="sektor" type="hidden" value={selectedCategory} />
        </div>

        {/* Position */}
        <div className="flex flex-col gap-1">
          <Label>Position</Label>
          <Input name="position" placeholder="Ketua" />
          <span className="text-red-500">{state?.error.position}</span>
        </div>

        {/* Sektor */}
        <div className="flex flex-col gap-1">
          <Label>Sektor</Label>
          <DropdownMenu onOpenChange={setOpenSektor}>
            <DropdownMenuTrigger asChild>
              <Button variant={"outline"} className="flex justify-between">
                <span
                  className={clsx("font-normal", {
                    "text-gray-500": !selectedSektor,
                  })}
                >
                  {formatSektor(selectedSektor) || "Select Sektor"}
                </span>
                <span
                  className={`transition-transform duration-200 ${
                    openSektor ? "rotate-90" : "rotate-0"
                  }`}
                >
                  <ChevronRight className="h-4 w-4" />
                </span>
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
              {sektorList.map((item, index) => (
                <DropdownMenuItem
                  key={index}
                  onClick={() => setSelectedSektor(item)}
                >
                  {formatSektor(item)}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <input name="sektor" type="hidden" value={selectedSektor} />
        </div>

        <Button type="submit" disabled={isPending}>
          {isPending ? "Saving..." : "Save"}
        </Button>
      </div>
    </form>
  );
};

export default CreateFormPengurus;
