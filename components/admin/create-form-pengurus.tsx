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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

const CreateFormPengurus = () => {
  const [sektorList, setSektorList] = useState<string[]>([]);
  const [selectedSektor, setSelectedSektor] = useState<string>("");
  const [categoryList, setCategoryList] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [openSektor, setOpenSektor] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);
  const [openCalendar, setOpenCalendar] = useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined);

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
        <div className="flex flex-col gap-2">
          <Label>Name</Label>
          <Input name="name" placeholder="Stephen" />
          <span className="text-red-500">{state?.error.name}</span>
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-2">
          <Label>Phone</Label>
          <Input name="phone" placeholder="0818..." />
          <span className="text-red-500">{state?.error.phone}</span>
        </div>

        {/* Birth */}
        <div className="flex flex-col gap-2">
          <Label>Birth</Label>
          <Popover open={openCalendar} onOpenChange={setOpenCalendar}>
            <PopoverTrigger asChild>
              <Button variant={"outline"} className="flex justify-between">
                <span
                  className={clsx("font-normal", {
                    "text-gray-500": !date,
                  })}
                >
                  {date ? date.toLocaleDateString() : "Select date"}
                </span>
                <span
                  className={`transition-transform duration-200 ${
                    openCalendar ? "rotate-90" : "rotate-0"
                  }`}
                >
                  <ChevronRight className="h-4 w-4" />
                </span>
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="w-auto overflow-hidden p-0"
              align="start"
            >
              <Calendar
                mode="single"
                selected={date}
                captionLayout="dropdown"
                onSelect={(date) => {
                  setDate(date);
                  setOpenCalendar(false);
                }}
              />
            </PopoverContent>
          </Popover>
          <input
            name="birth"
            type="hidden"
            value={date ? date.toLocaleDateString() : ""}
          />
          <span className="text-red-500">{state?.error.birth}</span>
        </div>

        {/* Category */}
        <div className="flex flex-col gap-2">
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
          <input name="category" type="hidden" value={selectedCategory} />
          <span className="text-red-500">{state?.error.category}</span>
        </div>

        {/* Position */}
        <div className="flex flex-col gap-2">
          <Label>Position</Label>
          <Input
            name="position"
            placeholder="Ketua"
            readOnly={selectedCategory !== "Pengurus"}
          />
          <span className="text-red-500">{state?.error.position}</span>
        </div>

        {/* Sektor */}
        <div className="flex flex-col gap-2">
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
          <span className="text-red-500">{state?.error.sektor}</span>
        </div>

        <Button type="submit" disabled={isPending}>
          {isPending ? "Saving..." : "Save"}
        </Button>
      </div>
    </form>
  );
};

export default CreateFormPengurus;
