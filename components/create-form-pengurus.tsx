"use client";

import React, { useActionState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SavePengurus } from "@/lib/action";

const CreateFormPengurus = () => {
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
          <Input name="sektor" />
        </div>

        <Button type="submit">Save</Button>
      </div>
    </form>
  );
};

export default CreateFormPengurus;
