"use client";

import React, { useActionState, useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import clsx from "clsx";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SaveJadwalIbadah, UpdateJadwalIbadah } from "@/lib/action";
import { JadwalIbadahProps } from "@/types/jadwal-ibadah";

const EditFormJadwalIbadah = ({
  jadwalIbadah,
}: {
  jadwalIbadah: JadwalIbadahProps;
}) => {
  const [openCalendar, setOpenCalendar] = useState(false);
  const [date, setDate] = useState<Date | undefined>(
    jadwalIbadah.date ? new Date(jadwalIbadah.date) : undefined,
  );
  const [pelayanList, setPelayanList] = useState<
    { id: string; name: string }[]
  >([]);
  const [ekaId, setEkaId] = useState(jadwalIbadah.ekaId ?? "");
  const [dwiId, setDwiId] = useState(jadwalIbadah.dwiId ?? "");

  useEffect(() => {
    fetch("/api/pengurus")
      .then((res) => res.json())
      .then((data) => setPelayanList(data))
      .catch((err) => console.error(err));
  }, []);

  const [state, formAction, isPending] = useActionState(
    UpdateJadwalIbadah.bind(null, jadwalIbadah.id),
    null,
  );

  return (
    <form action={formAction}>
      <div className="flex flex-col gap-3">
        {/* Tempat Ibadah */}
        <div className="flex flex-col gap-2">
          <Label>Tempat Ibadah</Label>
          <Input
            name="place"
            defaultValue={jadwalIbadah.place}
            placeholder="Ruang Serbaguna"
            readOnly
          />
          <span className="text-red-500">{state?.error.place}</span>
        </div>

        <div className="flex gap-3">
          {/* Pelayan Firman (EKA) */}
          <div className="flex flex-col gap-2 w-full">
            <Label>Pelayan Firman (EKA)</Label>
            <Select onValueChange={setEkaId} defaultValue={ekaId}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="EKA" />
              </SelectTrigger>
              <SelectContent>
                {pelayanList.map((item) => (
                  <SelectItem key={item.id} value={item.id}>
                    {item.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <input type="hidden" name="ekaId" value={ekaId} />
            <span className="text-red-500">{state?.error.ekaId}</span>
          </div>

          {/* Pelayan Firman (DWI) */}
          <div className="flex flex-col gap-2 w-full">
            <Label>Pelayan Firman (DWI)</Label>
            <Select onValueChange={setDwiId} defaultValue={dwiId}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="DWI" />
              </SelectTrigger>
              <SelectContent>
                {pelayanList.map((item) => (
                  <SelectItem key={item.id} value={item.id}>
                    {item.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <input type="hidden" name="dwiId" value={dwiId} />
            <span className="text-red-500">{state?.error.dwiId}</span>
          </div>
        </div>

        {/* Date */}
        <div className="flex flex-col gap-2">
          <Label>Date</Label>
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
            name="date"
            type="hidden"
            value={
              date
                ? date.toLocaleDateString("en-CA", { timeZone: "Asia/Jakarta" })
                : ""
            }
          />
          <span className="text-red-500">{state?.error.date}</span>
        </div>

        {/* Waktu */}
        <div className="flex flex-col gap-2">
          <Label>Time</Label>
          <Input
            type="time"
            defaultValue={jadwalIbadah.time}
            name="time"
            readOnly
          />
          <span className="text-red-500">{state?.error.time}</span>
        </div>

        <Button type="submit" disabled={isPending}>
          {isPending ? "Updating..." : "Update"}
        </Button>
      </div>
    </form>
  );
};

export default EditFormJadwalIbadah;
