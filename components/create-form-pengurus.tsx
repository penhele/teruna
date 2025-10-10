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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchSektor = async () => {
      const res = await fetch("/api/sektor");
      const data = await res.json();
      setSektorList(data);
    };

    fetchSektor();
  }, []);

  const [state, formAction, isPending] = useActionState(
    SavePengurus.bind(null),
    null,
  );

  return (
    <form action={formAction}>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <Label>Name</Label>
          <Input name="name" placeholder="Stephen" />
          <span className="text-red-500">{state?.error.name}</span>
        </div>
        <div className="flex flex-col gap-1">
          <Label>Position</Label>
          <Input name="position" placeholder="Ketua" />
          <span className="text-red-500">{state?.error.position}</span>
        </div>
        <div className="flex flex-col gap-1">
          <Label>Sektor</Label>
          <DropdownMenu onOpenChange={setOpen}>
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
                    open ? "rotate-90" : "rotate-0"
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
