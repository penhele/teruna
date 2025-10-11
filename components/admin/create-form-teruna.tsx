"use client";

import React, { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { ChevronRight } from "lucide-react";
import { formatSektor } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

const CreateFormTeruna = () => {
  const [sektorList, setSektorList] = useState<string[]>([]);
  const [selectedSektor, setSelectedSektor] = useState<string>("");
  const [openSektor, setOpenSektor] = useState(false);
  const [genderList, setGenderList] = useState<string[]>([]);
  const [selectedGender, setSelectedGender] = useState<string>("");
  const [openGender, setOpenGender] = useState(false);
  const [openCalendar, setOpenCalendar] = useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined);

  useEffect(() => {
    const fetchEnums = async () => {
      const sektorRes = await fetch("/api/enum/sektor");
      const sektorData = await sektorRes.json();
      setSektorList(sektorData);

      const gemderRes = await fetch("/api/enum/gender");
      const gemderData = await gemderRes.json();
      setGenderList(gemderData);
    };

    fetchEnums();
  }, []);

  return (
    <form action="">
      <div className="flex flex-col gap-3">
        {/* name */}
        <div className="flex flex-col gap-2">
          <Label>Name</Label>
          <Input name="name" placeholder="Stephen" />
        </div>

        {/* phone */}
        <div className="flex flex-col gap-2">
          <Label>Phone</Label>
          <Input name="phone" placeholder="0818..." />
        </div>

        {/* Gender */}
        <div className="flex flex-col gap-2">
          <Label>Gender</Label>
          <DropdownMenu onOpenChange={setOpenGender}>
            <DropdownMenuTrigger asChild>
              <Button variant={"outline"} className="flex justify-between">
                <span
                  className={clsx("font-normal", {
                    "text-gray-500": !selectedGender,
                  })}
                >
                  {selectedGender || "Select Gender"}
                </span>
                <span
                  className={`transition-transform duration-200 ${
                    openGender ? "rotate-90" : "rotate-0"
                  }`}
                >
                  <ChevronRight className="h-4 w-4" />
                </span>
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
              {genderList.map((item, index) => (
                <DropdownMenuItem
                  key={index}
                  onClick={() => setSelectedGender(item)}
                >
                  {item}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <input name="gender" type="hidden" value={selectedGender} />
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
        </div>

        <Button type="submit">
          Save
        </Button>
      </div>
    </form>
  );
};

export default CreateFormTeruna;
